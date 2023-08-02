// script.js
document.addEventListener('mousemove', parallax);

function parallax(e) {
  const body = document.querySelector('body');
  const x = (window.innerWidth - e.pageX) / 100;
  const y = (window.innerHeight - e.pageY) / 100;
  body.style.backgroundPosition = `${x}px ${y}px`;
}
