import { Poster } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider>
    {/* @hl-start */}
    <Poster
      className="vds-poster"
      src="https://media-files.vidstack.io/sprite-fight/poster.webp"
      alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
    />
    {/* @hl-end */}
  </MediaProvider>
</MediaPlayer>;
