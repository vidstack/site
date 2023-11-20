import { Poster } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider>
    {/* @hl-start */}
    <Poster
      class="absolute inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
      src="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200"
      alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
    />
    {/* @hl-end */}
  </MediaProvider>
</MediaPlayer>;
