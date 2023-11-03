import { MediaPlayer, walkTriggerEventChain, type MediaPlayingEvent } from '@vidstack/react';

function onPlaying(nativeEvent: MediaPlayingEvent) {
  // walk through each trigger event in the chain
  walkTriggerEventChain(nativeEvent, (trigger) => {
    console.log(trigger);
  });
}

<MediaPlayer onPlaying={onPlaying} />;
