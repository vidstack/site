import { Gesture } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider />
  {/* @hl-start */}
  <Gesture
    class="pointer-coarse:hidden absolute inset-0 z-0 block h-full w-full"
    event="pointerup"
    action="toggle:paused"
  />
  <Gesture
    class="pointer-fine:hidden absolute inset-0 z-0 block h-full w-full"
    event="pointerup"
    action="toggle:controls"
  />
  <Gesture
    class="absolute inset-0 z-10 block h-full w-1/5"
    event="dblpointerup"
    action="seek:-10"
  />
  <Gesture class="absolute inset-0 z-10 block h-full w-1/5" event="dblpointerup" action="seek:10" />
  <Gesture
    class="absolute inset-0 z-0 block h-full w-full"
    event="dblpointerup"
    action="toggle:fullscreen"
  />
  {/* @hl-end */}
</MediaPlayer>;
