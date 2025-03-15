// Fonction qui vérifie si une année est bissextile
function bisextile(annee) {
    // Une année est bissextile si elle est divisible par 4, mais pas par 100,
    // sauf si elle est également divisible par 400.
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return `${annee} est une année bissextile.`;
    } else {
        return `${annee} n'est pas une année bissextile.`;
    }
}

// Test de la fonction avec quelques exemples
console.log(bisextile(2020)); // 2020 est une année bissextile
console.log(bisextile(1900)); // 1900 n'est pas une année bissextile
console.log(bisextile(2000)); // 2000 est une année bissextile
console.log(bisextile(2024)); // 2024 est une année bissextile
console.log(bisextile(2023)); // 2023 n'est pas une année bissextile
