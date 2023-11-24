player.addEventListener('pause', (event) => {
  // Device sleep would be tracked elsewhere.
  if (isDeviceSleep) {
    event.triggers.add(new Event('device-sleep'));
    event.originEvent; // this will now return device-sleep
  }
});
