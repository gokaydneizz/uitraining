const hamburger = document.querySelector('.hamburger');
const buttons = document.querySelector('.buttons');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  buttons.classList.toggle('active');
});
