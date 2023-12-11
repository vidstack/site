import { Gesture } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider />
  {/* @hl-start */}
  <Gesture className="media-gesture" event="pointerup" action="toggle:paused" />
  <Gesture className="media-gesture" event="pointerup" action="toggle:controls" />
  <Gesture className="media-gesture" event="dblpointerup" action="seek:-10" />
  <Gesture className="media-gesture" event="dblpointerup" action="seek:10" />
  <Gesture className="media-gesture" event="dblpointerup" action="toggle:fullscreen" />
  {/* @hl-end */}
</MediaPlayer>;
