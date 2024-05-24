// для регулирования высоты vh для мобильных устройств (google)
// ========================================================
function adjustViewportHeight() {
  // Приводим в соответствие высоту видимой области
  document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
}

adjustViewportHeight();

window.addEventListener('resize', adjustViewportHeight);
// ========================================================
