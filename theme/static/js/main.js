document.addEventListener('DOMContentLoaded', () => {
  // Unix timestamp (in seconds) to count down to
  console.log('<3');
  // var countDownDate = new Date('January 19, 2023 10:00:00').getTime();
  // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
  // const containerEl = document.querySelector('.container');
  const containerMid = document.getElementById('container-mid');
  const containerLow = document.getElementById('container-low');
  const albumsEl = document.querySelector('.albums');
  const albumElements = document.querySelectorAll('.album');
  const hospulAlbum = albumElements[0];
  const euforijaAlbum = albumElements[1];
  const buyBtns = document.querySelectorAll('.album .buy-btn');

  const toggleContent = () => {
    // containerEl.style.display = 'none';
    if (containerLow && containerLow) {
      containerMid.style.display = 'none';
      containerLow.style.display = 'none';
    }

    // albumsEl.classList.add('live');

    // albumElements.forEach((albumEl) => {
    //   albumEl.classList.add('live');
    // });
    // hospulAlbum.setAttribute('href', 'https://buckesidi.lnk.to/hospul');
    // euforijaAlbum.setAttribute('href', 'https://buckesidi.lnk.to/euforija');
    // buyBtns.forEach((buyBtn) => {
    //   buyBtn.innerText = 'NARUČI';
    // });
    // albumsElements.style.display = 'flex';
  };
  const startDate = new Date('April 04, 2025 00:00:00');

  if (new Date() > startDate) {
    toggleContent();
    console.log("Redirecting to https://bfan.link/moderne-veze")
    location.href="https://bfan.link/moderne-veze"
  }
  var countDownDate = startDate.getTime() / 1000;

  // Set up FlipDown
  var flipdown = new FlipDown(countDownDate, 'flipdown-low')

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      toggleContent();
      // albumsElements.style.display = console.log('Ploče su u prodaji!');
    });

  var flipdown2 = new FlipDown(countDownDate, 'flipdown-mid')

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      toggleContent();
      // albumsElements.style.display = console.log('Ploče su u prodaji!');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);
});
