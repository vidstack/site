import { Captions } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider />
  {/* @hl-start */}
  <Captions className="media-captions absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300 media-captions:opacity-100 media-controls:bottom-[85px] media-preview:opacity-0 aria-hidden:hidden" />
  {/* @hl-end */}
</MediaPlayer>;
