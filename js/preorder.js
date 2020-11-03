document.addEventListener('DOMContentLoaded', function() {
    function showPreorderForm()
    {
        $('#formModal').modal('show');
        $('#mainForm').trigger('reset');
        $('#error').removeClass('active').text('');
        $('.vinyl-image.big').attr('src', '/img/04.png');
    }

    const flipCard = document.querySelector('.flip-card');
    const heroTitle = document.getElementById('hero__title');
    flipCard.addEventListener('click', showPreorderForm);
    heroTitle.addEventListener('click', showPreorderForm);

    const smallImages = document.querySelectorAll('.vinyl-image.small');
    const bigImage = document.querySelector('.vinyl-image.big');
    const hiddenSmallImage = document.querySelector('.vinyl-flex-item.small.hidden');
    smallImages.forEach(function(smallImg){
        let imgSrc = smallImg.getAttribute('src');
        smallImg.addEventListener('click',function(ev){
            bigImage.src = imgSrc;
            hiddenSmallImage.classList.remove('hidden');
        });
    })

    // form - quantity check 1-4
    document.getElementById('631847714').addEventListener('input',function(ev){
        var value = ev.target.value;
        if (value !== '' ){
            if (value > 4) {
                ev.target.value = 4;
            }
            if (value < 1) {
                ev.target.value = 1;
            }
        }
    });
});
