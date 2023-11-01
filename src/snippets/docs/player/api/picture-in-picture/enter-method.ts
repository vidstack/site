try {
  // `PictureInPictureWindow` will be returned if supported.
  const pipWindow = await player.enterPictureInPicture();
  if (pipWindow) {
    // ...
  }
} catch (e) {
  // This will generally throw if:
  // 1. PIP API is not available.
  // 2. Or, the user has not interacted with the document yet.
}
