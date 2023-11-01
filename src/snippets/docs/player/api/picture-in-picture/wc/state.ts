const player = document.querySelector('media-player');

// Get state.
const { canPictureInPicture, pictureInPicture } = player.state;

// Subscribe to changes.
player.subscribe(({ canPictureInPicture, pictureInPicture }) => {
  // ...
});
