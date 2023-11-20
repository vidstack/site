<media-player
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8"
  class="border-0 bg-transparent"
  muted
  playsinline
  style="--media-focus-ring: 0 0 0 3px rgb(78 156 246); transform: translateY(100%);"
>
  <media-provider style="display: none"></media-provider>
  <media-time-slider class="vds-time-slider vds-slider w-[400px]" value={50}>
    <div class="vds-slider-track bg-inverse/20" />
    <div class="vds-slider-track-fill vds-slider-track bg-inverse" />
    <div class="vds-slider-progress vds-slider-track" />
    <div class="vds-slider-thumb" />
    <media-slider-preview class="vds-slider-preview">
      <media-slider-thumbnail
        src="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
        class="vds-slider-thumbnail vds-thumbnail"
      ></media-slider-thumbnail>
      <media-slider-value class="vds-slider-value"></media-slider-value>
    </media-slider-preview>
  </media-time-slider>
</media-player>
