player.addEventListener('playing', (event) => {
  // Resuming from buffering?
  if (event.triggers.hasType('waiting')) {
    // ...
  }
});
