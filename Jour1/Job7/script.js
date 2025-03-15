// Liste des jours fériés en 2024
const joursFeries2024 = [
    "2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-07-14",
    "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"
];

// Fonction pour vérifier le jour travaillé
function verifierJour() {
    // Récupérer la date saisie par l'utilisateur
    const inputDate = document.getElementById("dateInput").value;
    
    if (!inputDate) {
        console.log("Veuillez entrer une date.");
        return;
    }

    // Créer un objet Date à partir de la chaîne de caractères
    const date = new Date(inputDate);
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0 (janvier = 0)
    const annee = date.getFullYear();

    // Formater la date pour la comparer avec les jours fériés
    const dateFormatee = `${annee}-${String(mois).padStart(2, '0')}-${String(jour).padStart(2, '0')}`;

    // Vérifier si la date est un jour férié
    if (joursFeries2024.includes(dateFormatee)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
        return;
    }

    // Vérifier si la date est un samedi ou un dimanche
    const jourSemaine = date.getDay(); // 0 = dimanche, 1 = lundi, ..., 6 = samedi
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end.`);
        return;
    }

    // Si ce n'est ni un jour férié ni un week-end, c'est un jour travaillé
    console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé.`);
}
