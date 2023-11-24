import { MediaPlayer, type MediaPlayingEvent } from '@vidstack/react';

function onPlaying(nativeEvent: MediaPlayingEvent) {
  // walk through each trigger event in the chain
  nativeEvent.triggers.walk((trigger) => {
    console.log(trigger);
  });
}

<MediaPlayer onPlaying={onPlaying} />;
