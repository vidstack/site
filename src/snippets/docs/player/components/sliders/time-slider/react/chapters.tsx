import { MediaPlayer, MediaProvider, Track } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider>
    {/* @hl-start */}
    <Track
      src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
      lang="en-US"
      kind="chapters"
      default
    />
    {/* @hl-end */}
  </MediaProvider>
</MediaPlayer>;
