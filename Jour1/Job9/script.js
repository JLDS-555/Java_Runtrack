// Fonction de tri
function tri(numbers, order) {
    // Vérifier si l'ordre est valide ("asc" ou "desc")
    if (order !== "asc" && order !== "desc") {
        console.log("L'ordre spécifié est invalide. Utilisez 'asc' ou 'desc'.");
        return;
    }

    // Trier le tableau en fonction de l'ordre
    if (order === "asc") {
        // Tri ascendant
        numbers.sort((a, b) => a - b);
    } else {
        // Tri descendant
        numbers.sort((a, b) => b - a);
    }

    // Retourner le tableau trié
    return numbers;
}

// Fonction pour afficher le résultat dans la console et sur la page
function afficherResultat() {
    // Récupérer la liste de nombres et l'ordre depuis les éléments HTML
    const numbersInput = document.getElementById("numbersInput").value;
    const orderInput = document.getElementById("orderInput").value;

    // Convertir la chaîne d'input en tableau de nombres
    const numbers = numbersInput.split(',').map(num => parseInt(num.trim(), 10));

    // Vérifier que le tableau contient bien des nombres
    if (numbers.some(isNaN)) {
        console.log("Veuillez entrer des nombres valides.");
        document.getElementById("resultat").textContent = "Veuillez entrer des nombres valides.";
        return;
    }

    // Trier le tableau en fonction de l'ordre
    const sortedNumbers = tri(numbers, orderInput);

    // Afficher le résultat dans la console
    console.log(sortedNumbers);

    // Afficher le résultat dans l'élément <p> de la page
    document.getElementById("resultat").textContent = `Tableau trié : [${sortedNumbers.join(', ')}]`;
}
