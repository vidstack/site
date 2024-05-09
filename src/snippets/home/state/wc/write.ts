import { MediaRemoteControl } from 'vidstack';

// Over 34 methods available!
const remote = new MediaRemoteControl();

button.addEventListener('pointerup', (event) => {
  // Attaching trigger here to trace this play call back to this event.
  remote.play(event);
});
