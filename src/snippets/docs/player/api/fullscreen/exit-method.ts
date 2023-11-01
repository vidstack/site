try {
  await player.exitFullscreen();
} catch (e) {
  // This will generally throw if:
  // 1. Fullscreen API is not available.
}
