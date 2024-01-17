document.addEventListener('DOMContentLoaded', () => {
  console.log('AAAA');
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.querySelector('#section07');
  console.log('CAOO', scrollBtn);
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('PERA');
    // $('html, body').animate(
    //   { scrollTop: $(this.attr('href')).offset().top },
    //   500,
    //   'linear'
    // );
  });
});
