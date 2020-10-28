const form = document.getElementById('mainForm');
const firstNameLastName = document.getElementById('2005620554');
const phone = document.getElementById('1166974658');

form.addEventListener('submit', (e) => {
    let errors = [];
    if (firstNameLastName.value === '') {
        errors.push('Ime ne može da bude prazno');
    }
    const phoneRegex = /^\+?[0-9]+$/;
    if (!phone.value.trim().match(phoneRegex)) {
        errors.push('Telefon mora biti u formatu (+)123456789');
    }
    if (errors.length > 0) {
        e.preventDefault();
    }
});