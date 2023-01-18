document.addEventListener('DOMContentLoaded', () => {
  // Unix timestamp (in seconds) to count down to
  console.log('<3');
  // var countDownDate = new Date('January 19, 2023 10:00:00').getTime();
  // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
  const containerEl = document.querySelector('.container');
  const concertsEl = document.querySelector('.concerts');

  const toggleContent = () => {
    containerEl.style.display = 'none';
    concertsEl.style.display = 'flex';
  };
  const startDate = new Date('January 19, 2023 10:00:00');

  if (new Date() > startDate) {
    toggleContent();
  }
  var countDownDate = startDate.getTime() / 1000;

  // Set up FlipDown
  var flipdown = new FlipDown(countDownDate)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      toggleContent();
      concertsEl.style.display = console.log('Ulaznice su u prodaji!');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);
});
