import { MediaPlayer, type MediaAudioGainChangeEvent } from '@vidstack/react';

function Player() {
  function onAudioGainChange(gain: number | null, nativeEvent: MediaAudioGainChangeEvent) {
    const requestEvent = nativeEvent.request;
  }

  return <MediaPlayer onAudioGainChange={onAudioGainChange}>{/* ... */}</MediaPlayer>;
}
