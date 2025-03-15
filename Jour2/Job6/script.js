// Séquence du code Konami
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiInput = [];

// Fonction pour vérifier le code Konami
document.addEventListener('keydown', function(e) {
    konamiInput.push(e.code);

    // Ne garder que les 10 derniers éléments de l'entrée
    if (konamiInput.length > konamiCode.length) {
        konamiInput.shift();
    }

    // Vérifier si l'entrée correspond au code Konami
    if (konamiInput.toString() === konamiCode.toString()) {
        // Appliquer le style de La Plateforme_
        document.body.classList.add('konami-active');
        alert("Code Konami activé ! La page devient stylisée.");
    }
});
