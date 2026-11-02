const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');

// Execute the production event registration with controlled clipboard timing.
const source = readFileSync(require('node:path').join(__dirname, '../script.js'), 'utf8');
const start = source.indexOf("document.getElementById('copy-password').addEventListener");
const end = source.indexOf('// Project details', start);
function setup() {
  let handler, resolve, reject;
  const notices = [], selected = [], writes = [];
  const output = { value: 'original-password' };
  const context = {
    passwordOutput: output,
    document: {
      getElementById: () => ({ addEventListener: (_, callback) => { handler = callback; } }),
      createRange: () => ({ selectNodeContents: node => selected.push(node) })
    },
    window: { getSelection: () => ({ removeAllRanges() {}, addRange() {} }) },
    navigator: { clipboard: { writeText: value => {
      writes.push(value);
      return new Promise((yes, no) => { resolve = yes; reject = no; });
    } } },
    toast: key => notices.push(key)
  };
  vm.runInNewContext(source.slice(start, end), context);
  return { output, notices, selected, writes, click: () => handler(),
    finish: ok => ok ? resolve() : reject(new Error('denied')) };
}
for (const ok of [true, false]) {
  test(`unchanged password, clipboard ${ok ? 'success' : 'failure'}`, async () => {
    const app = setup(), pending = app.click();
    app.finish(ok); await pending;
    assert.deepEqual(app.writes, ['original-password']);
    assert.deepEqual(app.notices, [ok ? 'copied' : 'copyError']);
    assert.equal(app.selected.length, ok ? 0 : 1);
  });
  for (const next of ['new-password', '']) {
    test(`ignore stale ${ok ? 'success' : 'failure'} after result becomes ${next || 'empty'}`, async () => {
      const app = setup(), pending = app.click();
      app.output.value = next;
      app.finish(ok); await pending;
      assert.deepEqual(app.notices, []);
      assert.deepEqual(app.selected, []);
    });
  }
}
test('empty result does not call clipboard', async () => {
  const app = setup(); app.output.value = ''; await app.click();
  assert.deepEqual(app.writes, []);
});
