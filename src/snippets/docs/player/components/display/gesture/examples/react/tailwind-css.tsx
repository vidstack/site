import { Gesture } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider />
  {/* @hl-start */}
  <Gesture
    className="pointer-coarse:hidden absolute inset-0 z-0 block h-full w-full"
    event="pointerup"
    action="toggle:paused"
  />
  <Gesture
    className="pointer-fine:hidden absolute inset-0 z-0 block h-full w-full"
    event="pointerup"
    action="toggle:controls"
  />
  <Gesture
    className="absolute inset-0 z-10 block h-full w-1/5"
    event="dblpointerup"
    action="seek:-10"
  />
  <Gesture
    className="absolute inset-0 z-10 block h-full w-1/5"
    event="dblpointerup"
    action="seek:10"
  />
  <Gesture
    className="absolute inset-0 z-0 block h-full w-full"
    event="dblpointerup"
    action="toggle:fullscreen"
  />
  {/* @hl-end */}
</MediaPlayer>;
