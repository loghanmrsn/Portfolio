// Texte à taper automatiquement
const textElement = document.querySelector('.typing-text');
const words = ["Cybersécurité", "Développement Web"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Effacer
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        // Écrire
        textElement.textContent = currentWord.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause à la fin du mot
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        // Passer au mot suivant
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Lancer l'animation au chargement
document.addEventListener('DOMContentLoaded', typeEffect);