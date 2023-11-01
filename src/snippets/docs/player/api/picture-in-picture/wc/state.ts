// Get state.
const { canPictureInPicture, pictureInPicture } = player.state;

// Subscribe to changes.
player.subscribe(({ canPictureInPicture, pictureInPicture }) => {
  // ...
});
