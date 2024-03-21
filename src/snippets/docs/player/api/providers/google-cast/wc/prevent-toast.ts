player.addEventListener('google-cast-prompt-error', (event) => {
  const error = event.detail;
  switch (error.code) {
    case 'NO_DEVICES_AVAILABLE':
      event.preventDefault(); // prevent showing toast.
      // ...
      break;
  }
});
