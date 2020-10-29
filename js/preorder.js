document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    const heroTitle = document.getElementById('hero__title');
    flipCard.addEventListener('click', showPreorderForm);
    heroTitle.addEventListener('click', showPreorderForm);

    function showPreorderForm()
    {
        $('#formModal').modal('show');
    }
});
