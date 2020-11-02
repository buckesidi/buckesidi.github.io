document.addEventListener('DOMContentLoaded', function() {
    function showPreorderForm()
    {
        $('#formModal').modal('show');
        $('#mainForm').trigger('reset');
        $('#error').removeClass('active').text('');
    }

    const flipCard = document.querySelector('.flip-card');
    const heroTitle = document.getElementById('hero__title');
    flipCard.addEventListener('click', showPreorderForm);
    heroTitle.addEventListener('click', showPreorderForm);

    const smallImages = document.querySelectorAll('.vinyl-image.small');
    const bigImage = document.querySelector('.vinyl-image.big');
    smallImages.forEach(function(smallImg){
        let imgSrc = smallImg.getAttribute('src');
        smallImg.addEventListener('click',function(ev){
            bigImage.src = imgSrc;
        });
    })
});
