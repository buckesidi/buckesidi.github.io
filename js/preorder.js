const flipCard = document.querySelector('.flip-card');
flipCard.addEventListener('click', showPreorderForm);

function showPreorderForm()
{
    $('#formModal').modal('show');
}