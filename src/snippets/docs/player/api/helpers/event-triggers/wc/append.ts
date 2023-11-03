import { appendTriggerEvent } from 'vidstack';

player.addEventListener('pause', (event) => {
  // Device sleep would be tracked elsewhere.
  if (isDeviceSleep) {
    appendTriggerEvent(event, new Event('device-sleep'));
  }
});
