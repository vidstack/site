import { hasTriggerEvent } from 'vidstack';

player.addEventListener('playing', (event) => {
  // Resuming from buffering?
  if (hasTriggerEvent(event, 'waiting')) {
    // ...
  }
});
