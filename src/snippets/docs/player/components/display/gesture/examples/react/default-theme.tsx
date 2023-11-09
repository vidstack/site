<MediaPlayer>
  <MediaProvider />
  {/* @hl-start */}
  <Gesture class="vds-gesture" event="pointerup" action="toggle:paused" />
  <Gesture class="vds-gesture" event="pointerup" action="toggle:controls" />
  <Gesture class="vds-gesture" event="dblpointerup" action="seek:-10" />
  <Gesture class="vds-gesture" event="dblpointerup" action="seek:10" />
  <Gesture class="vds-gesture" event="dblpointerup" action="toggle:fullscreen" />
  {/* @hl-end */}
</MediaPlayer>;
