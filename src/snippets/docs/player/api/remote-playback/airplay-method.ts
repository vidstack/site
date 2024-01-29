try {
  await player.requestAirPlay();
} catch (e) {
  // Throws if not supported or the dialog is cancelled.
}
