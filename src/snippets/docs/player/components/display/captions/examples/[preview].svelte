<media-player
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8"
  class="not-prose flex-col w-[375px] max-w-[375px] aspect-video bg-transparent border-none"
  crossorigin
  muted
>
  <media-provider>
    <media-captions class="vds-captions" />
    <track
      src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
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
