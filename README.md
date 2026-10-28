# its lizhy · Loghan

Portfolio personnel en HTML, CSS et JavaScript, sans framework ni dépendance externe.

## Développement

Depuis le dossier du dépôt :

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

La page d’entrée est `index.html`. Aucun build ni paquet à installer. Le site peut être hébergé directement sur GitHub Pages.

```sh
node --check script.js
```

## Interface

- Palette noir, blanc et argent ; effets translucides et volumes dessinés en CSS.
- Scènes avec titres fixes, parallaxe et éléments superposés au défilement, sans bloquer le défilement natif.
- Mise en page mobile et respect de `prefers-reduced-motion`.
- Français et anglais, avec langue conservée localement si le navigateur le permet.
- Carte de profil, projets Console CIEL et générateur de mots de passe, liens de contact.
- Démo locale du générateur : 8 à 32 caractères, aléatoire via Web Crypto, copie dans le presse-papier sur un contexte sécurisé (HTTPS ou serveur local). Aucun mot de passe enregistré ni envoyé.

Les textes traduits et libellés d’accessibilité se trouvent dans `script.js`. La structure et les liens sont dans `index.html`, la mise en page dans `style.css`. La capture `assets/console-ciel.png` provient du [dépôt Console CIEL](https://github.com/loghanmrsn/Console-logiciel/blob/main/console-ciel/docs/screenshots/chapitre_3_0.7.0/home_three_chapters.png). Son affichage est désaturé pour cette direction graphique. Le générateur est une démo intégrée au portfolio.

## Vérifications

Valider le chargement de HTML/CSS/JS, les liens internes, les deux langues et leur persistance, la fenêtre de détails et sa fermeture au clavier, le générateur et la copie. Vérifier aussi le rendu sur mobile, le défilement et le mode mouvement réduit. La syntaxe JavaScript seule ne valide pas ces interactions.
