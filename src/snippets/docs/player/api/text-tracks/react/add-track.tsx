import { MediaPlayer, MediaProvider, Track } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider>
    <Track
      src="/media/subs/english.vtt"
      kind="subtitles"
      label="English"
      lang="en-US"
      type="vtt"
      default
    />
  </MediaProvider>
</MediaPlayer>;
