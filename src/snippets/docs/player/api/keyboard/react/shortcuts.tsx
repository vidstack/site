// Default shortcuts.
import { MEDIA_KEY_SHORTCUTS } from 'vidstack';

<MediaPlayer
  keyShortcuts={{
    // Space-separated list.
    togglePaused: 'k Space',
    toggleMuted: 'm',
    toggleFullscreen: 'f',
    togglePictureInPicture: 'i',
    toggleCaptions: 'c',
    // Array.
    seekBackward: ['j', 'J', 'ArrowLeft'],
    seekForward: ['l', 'L', 'ArrowRight'],
    volumeUp: 'ArrowUp',
    volumeDown: 'ArrowDown',
    speedUp: '>',
    slowDown: '<',
    // Callback.
    fooBar: {
      keys: ['k', 'Space'],
      callback(event) {},
    },
  }}
/>;
