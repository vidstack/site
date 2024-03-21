import { type GoogleCastPromptError, type GoogleCastPromptErrorEvent } from '@vidstack/react';

function onGoogleCastPromptError(
  error: GoogleCastPromptError,
  nativeEvent: GoogleCastPromptErrorEvent,
) {
  switch (error.code) {
    case 'NO_DEVICES_AVAILABLE':
      nativeEvent.preventDefault(); // prevent showing toast.
      // ...
      break;
  }
}
