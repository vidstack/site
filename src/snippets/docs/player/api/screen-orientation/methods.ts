if (player.orientation.supported) {
  // Lock the orientation (will throw if not available).
  await player.orientation.lock('landscape');

  // ...

  // Unlock to allow user control.
  await player.orientation.unlock();
}
