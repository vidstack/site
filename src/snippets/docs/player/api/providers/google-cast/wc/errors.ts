import type { GoogleCastPromptError, GoogleCastPromptErrorEvent } from 'vidstack';

player.addEventListener('google-cast-prompt-error', (event) => {
  const error = event.detail;
  switch (error.code) {
    case 'CAST_NOT_AVAILABLE':
      break;
    case 'NO_DEVICES_AVAILABLE':
      break;
    case 'CANCEL':
      break;
    case 'TIMEOUT':
      break;
    case 'EXTENSION_NOT_COMPATIBLE':
      break;
    case 'EXTENSION_MISSING':
      break;
    case 'RECEIVER_UNAVAILABLE':
      break;
    case 'SESSION_ERROR':
      break;
    case 'CHANNEL_ERROR':
      break;
    case 'LOAD_MEDIA_FAILED':
      break;
  }
});
