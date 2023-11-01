try {
  await player.enterFullscreen();
} catch (e) {
  // This will generally throw if:
  // 1. Fullscreen API is not available.
  // 2. Or, the user has not interacted with the document yet.
}
