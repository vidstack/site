<MediaPlayer>
  <MediaProvider />
  {/* @hl-start */}
  <Gesture class="media-gesture" event="pointerup" action="toggle:paused" />
  <Gesture class="media-gesture" event="pointerup" action="toggle:controls" />
  <Gesture class="media-gesture" event="dblpointerup" action="seek:-10" />
  <Gesture class="media-gesture" event="dblpointerup" action="seek:10" />
  <Gesture class="media-gesture" event="dblpointerup" action="toggle:fullscreen" />
  {/* @hl-end */}
</MediaPlayer>;
