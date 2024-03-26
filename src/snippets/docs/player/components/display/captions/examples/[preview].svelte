<media-player
  src="https://files.vidstack.io/sprite-fight/hls/stream.m3u8"
  class="not-prose flex-col border-none bg-transparent"
  crossorigin
  muted
>
  <media-provider class="aspect-video w-[400px] max-w-[400px] border border-inverse">
    <media-captions class="vds-captions" />
    <track
      src="https://files.vidstack.io/sprite-fight/subs/english.vtt"
      label="English"
      srclang="en-US"
      kind="subtitles"
      default
    />
  </media-provider>

  <media-time-slider class="vds-slider">
    <div class="vds-slider-track" />
    <div class="vds-slider-track-fill vds-slider-track" />
    <div class="vds-slider-thumb" />
  </media-time-slider>
</media-player>

<style>
  media-player:not([data-can-play]) media-time-slider {
    display: none;
  }

  media-time-slider {
    --media-slider-track-bg: #dedede;
    --media-slider-track-fill-bg: #989898;
    width: 375px;
  }

  .vds-slider-thumb {
    opacity: 1 !important;
  }
</style>
