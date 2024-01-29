// Option 1. Cancel requests on the player.
const player = document.querySelector('media-player');
player.addEventListener('media-seek-request', (e) => {
  e.preventDefault();
});

// Option 2. Cancel requests on the component dispatching it.
const timeSlider = document.querySelector('media-time-slider');
timeSlider.addEventListener('media-seek-request', (e) => {
  e.preventDefault();
});
