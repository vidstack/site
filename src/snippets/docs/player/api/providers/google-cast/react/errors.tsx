import {
  MediaPlayer,
  type GoogleCastPromptError,
  type GoogleCastPromptErrorEvent,
} from '@vidstack/react';

function onGoogleCastPromptError(
  error: GoogleCastPromptError,
  nativeEvent: GoogleCastPromptErrorEvent,
) {
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
}

<MediaPlayer onGoogleCastPromptError={onGoogleCastPromptError} />;
