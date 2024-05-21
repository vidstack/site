import { MediaPlayer, type GoogleCastLoadedEvent } from '@vidstack/react';

function onCastLoaded(nativeEvent: GoogleCastLoadedEvent) {
  // ...
}

<MediaPlayer onGoogleCastLoaded={onCastLoaded} />;
