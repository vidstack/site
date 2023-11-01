try {
  await player.exitPictureInPicture();
} catch (e) {
  // This will generally throw if:
  // 1. PIP API is not available.
}
