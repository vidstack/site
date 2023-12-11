import { RemotionPoster } from '@vidstack/react/player/remotion';

<MediaPlayer>
  <MediaProvider>
    {/* @hl-start */}
    <RemotionPoster
      className="absolute inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-100"
      frame={10}
    />
    {/* @hl-end */}
  </MediaProvider>
</MediaPlayer>;
