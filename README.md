<div align="center">

# its lizhy · _Loghan_

**Développer. Explorer. Apprendre.**

Mon portfolio personnel : mes projets, mon univers et mon parcours en informatique.
Une interface noir, blanc et argent, avec de la transparence et des effets de profondeur au défilement.

### [↗ Découvrir le portfolio en ligne](https://loghanmrsn.github.io/Portfolio/)

**[Projets](https://loghanmrsn.github.io/Portfolio/#projects)** · **[CTF & résultats](https://loghanmrsn.github.io/Portfolio/#results)** · **[Contact](https://loghanmrsn.github.io/Portfolio/#contact)**

HTML · CSS · JavaScript &nbsp; / &nbsp; Français & English &nbsp; / &nbsp; GitHub Pages

</div>

---

## Derrière l’écran

Moi, c’est **Loghan, 17 ans**. À l’écran, c’est **its lizhy**.
Étudiant en informatique, j’apprends en créant des logiciels, des expériences web et des projets autour des systèmes et de la cybersécurité.

Ce dépôt contient le code du portfolio, conçu sans framework, sans dépendance externe et sans étape de compilation.

## Ce qu’on y trouve

- **Une identité visuelle monochrome** : volumes argentés, cartes translucides et typographie contrastée.
- **Un défilement en profondeur** : titres fixes et éléments qui passent devant ou derrière les autres, avec des animations liées au scroll natif.
- **Deux langues** : français et anglais, avec mémorisation du choix dans le navigateur.
- **Une interface adaptée au mobile** et un mode qui respecte la préférence de réduction des animations.
- **Les projets et les réseaux**, avec une section dédiée aux futurs résultats de CTF.
- **Un générateur de mots de passe utilisable directement sur le site**.

## Les projets

| Projet | Présentation | Découvrir |
| --- | --- | --- |
| **Console CIEL** | Une enquête éducative et une bibliothèque de jeux développées avec Godot. Des défis de code, de réseau et de cybersécurité, jouables hors ligne au clavier ou à la manette. | [Dépôt GitHub](https://github.com/loghanmrsn/Console-logiciel) |
| **SecurePass** | Un générateur de mots de passe personnalisables, intégré au portfolio. | [Utiliser le générateur](https://loghanmrsn.github.io/Portfolio/#password-generator) |

### SecurePass

Choisis une longueur de **8 à 64 caractères**, les catégories à inclure — majuscules, minuscules, chiffres et symboles — et, si besoin, l’exclusion des caractères ambigus.

La génération utilise **Web Crypto**, avec au moins un caractère de chaque catégorie sélectionnée. Tout se passe sur ton appareil : aucun mot de passe n’est enregistré ni envoyé. La copie dans le presse-papier fonctionne en HTTPS ou sur un serveur local ; si elle est indisponible, la sélection manuelle reste possible.

## Lancer le portfolio en local

**Prérequis :** Python 3 pour le serveur local. Node.js est facultatif, pour vérifier la syntaxe JavaScript.

```sh
git clone https://github.com/loghanmrsn/Portfolio.git
cd Portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

Ouvre ensuite `http://127.0.0.1:8000` dans ton navigateur. Si le dépôt est déjà cloné, lance simplement la dernière commande depuis son dossier.

Aucun `npm install` ni build n’est nécessaire. Les fichiers statiques sont publiés sur **GitHub Pages** à partir de la branche `main`.

## Se repérer dans le code

```text
Portfolio/
├── index.html          # Structure, sections et liens
├── style.css           # Mise en page, thème et animations
├── script.js           # Interactions, générateur et affichage des CTF
├── translations.js     # Textes et libellés d’accessibilité FR / EN
├── ctf-results.js      # Résultats des compétitions à renseigner
└── assets/             # Images des projets
```

### Modifier les contenus

- **Textes et traductions** : `translations.js`. Pour le texte visible avant le chargement de JavaScript, garde aussi `index.html` cohérent.
- **Liens et structure des sections** : `index.html`.
- **Style et effets de profondeur** : `style.css`. Les navigateurs compatibles utilisent les timelines CSS ; les autres disposent d’un repli avec géométrie mise en cache dans `script.js`.

## Me retrouver

**[Instagram — @loghanmrsn](https://www.instagram.com/loghanmrsn/)** · **[GitHub — loghanmrsn](https://github.com/loghanmrsn)** · **[moris.loghan@gmail.com](mailto:moris.loghan@gmail.com)**

---

La capture de Console CIEL utilisée dans le portfolio provient de [son dépôt](https://github.com/loghanmrsn/Console-logiciel/blob/main/console-ciel/docs/screenshots/chapitre_3_0.7.0/home_three_chapters.png). Elle est affichée en niveaux de gris pour rester dans la direction visuelle du site.
