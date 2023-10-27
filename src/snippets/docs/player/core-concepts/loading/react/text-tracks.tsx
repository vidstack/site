import { MediaPlayer, MediaProvider, Track } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider>
    {/* Dynamically add/remove tracks as needed. */}
    <Track src="/subs/english.json" kind="subtitles" label="English" lang="en-US" default />
    <Track src="/subs/spanish.json" kind="subtitles" label="Spanish" lang="es-ES" />
  </MediaProvider>
</MediaPlayer>;
