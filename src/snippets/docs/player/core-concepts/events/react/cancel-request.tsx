import { type MediaSeekRequestEvent } from '@vidstack/react';

function onSeekRequest(time: number, nativeEvent: MediaSeekRequestEvent) {
  nativeEvent.preventDefault();
}

// Option 1. Cancel requests on the player.
<MediaPlayer onMediaSeekRequest={onSeekRequest} />;

// Option 2. Cancel requests on the component dispatching it.
<TimeSlider.Root onMediaSeekRequest={onSeekRequest} />;
