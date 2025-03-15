// Fonction pour vérifier si un nombre est premier
function estPremier(n) {
    if (n <= 1) return false; // Les nombres <= 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Fonction pour vérifier si les deux nombres sont premiers et additionner
function verifierEtAdditionner() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    // Vérification si les deux nombres sont premiers
    if (estPremier(num1) && estPremier(num2)) {
        let somme = num1 + num2;
        document.getElementById("resultat").innerText = "La somme des nombres premiers est : " + somme;
    } else {
        document.getElementById("resultat").innerText = "Les deux nombres doivent être premiers.";
    }
}
