// Fonction qui calcule le pourcentage de scroll et modifie la couleur du footer
window.onscroll = function() {
    const footer = document.getElementById('footer');
    const percentageElement = document.getElementById('percentage');
    
    // Récupérer la position actuelle du scroll
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Calculer la hauteur totale du document et la hauteur visible de la fenêtre
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calculer le pourcentage de défilement
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    
    // Afficher le pourcentage dans l'élément avec id "percentage"
    percentageElement.innerText = `${Math.round(scrollPercentage)}%`;
    
    // Changer la couleur du footer en fonction du pourcentage de défilement
    footer.style.backgroundColor = `hsl(${scrollPercentage}, 100%, 50%)`;
};
