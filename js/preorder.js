document.addEventListener('DOMContentLoaded', function() {
    function showPreorderForm()
    {
        $('#formModal').modal('show');
        // $('#mainForm').trigger('reset');
    }

    const flipCard = document.querySelector('.flip-card');
    const heroTitle = document.getElementById('hero__title');
    flipCard.addEventListener('click', showPreorderForm);
    heroTitle.addEventListener('click', showPreorderForm);
});
