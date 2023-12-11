import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { RemotionPoster } from '@vidstack/react/player/remotion';

<MediaPlayer>
  <MediaProvider>
    {/* @hl-start */}
    <RemotionPoster frame={10} />
    {/* @hl-end */}
  </MediaProvider>
</MediaPlayer>;
