import {
  hasTriggerEvent,
  MediaPlayer,
  MediaProvider,
  walkTriggerEventChain,
  type MediaPlayingEvent,
} from '@vidstack/react';

function Player() {
  function onPlaying(nativeEvent: MediaPlayingEvent) {
    // is this resuming from buffering?
    if (hasTriggerEvent(nativeEvent, 'waiting')) {
      // ...
    }

    // walk through each trigger event in the chain
    walkTriggerEventChain(nativeEvent, (trigger) => {
      console.log(trigger);
    });
  }

  return (
    <MediaPlayer onPlaying={onPlaying}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
