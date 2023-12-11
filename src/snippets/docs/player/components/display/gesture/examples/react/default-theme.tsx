import { Gesture } from '@vidstack/react';

<MediaPlayer>
  <MediaProvider />
  {/* @hl-start */}
  <Gesture className="vds-gesture" event="pointerup" action="toggle:paused" />
  <Gesture className="vds-gesture" event="pointerup" action="toggle:controls" />
  <Gesture className="vds-gesture" event="dblpointerup" action="seek:-10" />
  <Gesture className="vds-gesture" event="dblpointerup" action="seek:10" />
  <Gesture className="vds-gesture" event="dblpointerup" action="toggle:fullscreen" />
  {/* @hl-end */}
</MediaPlayer>;
