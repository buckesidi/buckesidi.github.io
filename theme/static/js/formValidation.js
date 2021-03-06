function validateForm(e) {
    let form = document.getElementById('mainForm');
    let firstNameLastName = document.getElementById('2005620554');
    let phone = document.getElementById('1166974658');
    let state = document.getElementById('835883743');
    let city = document.getElementById('476110520');
    let zipCode = document.getElementById('2134337608');
    let street = document.getElementById('1065046570');
    let email = document.getElementById('1045781291');
    let quantity = document.getElementById('631847714');
    let errorElement = document.getElementById('error');
    let messages = [];
    if (
        firstNameLastName.value === '' || firstNameLastName.value == null
        || state.value === '' || state.value == null
        || city.value === '' || city.value == null
        || zipCode.value === '' || zipCode.value == null
        || street.value === '' || street.value == null
        || email.value === '' || email.value == null
        || quantity.value === '' || quantity.value == null
        || phone.value === '' || phone.value == null)
    {
        messages.push('Popunite sva polja');
    }
    const phoneRegex = /^\+?[0-9]+$/;
    if (!phone.value.trim().match(phoneRegex)) {
        messages.push('Telefon mora biti u formatu (+)123456789');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim().match(emailRegex)) {
        messages.push('Email mora biti u formatu email@example.com');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
        errorElement.classList.add('active');
        return;
    }
    // alert('Zahtev uspesno poslat!');
    $('#formModal').modal('hide');
    document.dispatchEvent(closedSwalEvent);
}