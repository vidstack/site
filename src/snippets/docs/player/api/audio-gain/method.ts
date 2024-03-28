try {
  player.setAudioGain(1); // Disable audio gain.
  player.setAudioGain(1.5); // 50% louder
  player.setAudioGain(2); // 100% louder
} catch (e) {
  // This will generally throw if:
  // 1. Current provider has not loaded yet.
  // 2. The current provider does not support setting audio gain.
}
