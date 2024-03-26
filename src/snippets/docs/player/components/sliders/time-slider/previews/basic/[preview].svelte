<media-player
  class="border-0 bg-transparent"
  src="https://files.vidstack.io/sprite-fight/hls/stream.m3u8"
  muted
  playsinline
  style="--media-focus-ring: 0 0 0 3px rgb(78 156 246);"
>
  <media-provider style="display: none"></media-provider>
  <media-time-slider class="vds-time-slider vds-slider w-[400px]" value={50}>
    <div class="vds-slider-track bg-inverse/20" />
    <div class="vds-slider-track-fill vds-slider-track bg-inverse" />
    <div class="vds-slider-progress vds-slider-track" />
    <div class="vds-slider-thumb" />
  </media-time-slider>
</media-player>
