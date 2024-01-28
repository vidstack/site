import { MediaPlayer, MediaProvider, Track } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider>
    {/* Dynamically add/remove tracks as needed. */}
    <Track src="/subs/english.vtt" kind="subtitles" label="English" lang="en-US" default />
    <Track src="/subs/spanish.vtt" kind="subtitles" label="Spanish" lang="es-ES" />
  </MediaProvider>
</MediaPlayer>;
