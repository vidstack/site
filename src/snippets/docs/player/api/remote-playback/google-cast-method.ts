try {
  await player.requestGoogleCast();
} catch (e) {
  // Throws if not supported or the dialog is cancelled.
}
