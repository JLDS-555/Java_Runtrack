// signup.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let address = document.getElementById('address').value;
    let postalCode = document.getElementById('postal-code').value;

    let firstNameError = document.getElementById('first-name-error');
    let lastNameError = document.getElementById('last-name-error');
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    let addressError = document.getElementById('address-error');
    let postalCodeError = document.getElementById('postal-code-error');

    // Réinitialisation des messages d'erreur
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    addressError.textContent = '';
    postalCodeError.textContent = '';

    let isValid = true;

    // Validation des champs
    if (!firstName) {
        firstNameError.textContent = 'Le prénom est requis veuillez remplir ce champ';
        isValid = false;
    }

    if (!lastName) {
        lastNameError.textContent = 'Le nom est requis veuillez remplir ce champ';
        isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Veuillez entrer un email valide.';
        isValid = false;
    }

    if (!password || password.length < 6) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
        isValid = false;
    }

    if (!address) {
        addressError.textContent = 'L\'adresse est requise.';
        isValid = false;
    }

    if (!postalCode || !/^\d{5}$/.test(postalCode)) {
        postalCodeError.textContent = 'Le code postal doit être composé de 5 chiffres.';
        isValid = false;
    }

    if (isValid) {
        // Envoi du formulaire ou autre action
        alert('Inscription réussie');
    }
});
