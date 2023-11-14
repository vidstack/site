<media-player
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8"
  muted
  playsinline
>
  <media-provider style="display: none"></media-provider>
  <media-time-slider class="vds-time-slider vds-slider w-[400px]" value={50}>
    <div class="vds-slider-track" />
    <div class="vds-slider-track-fill vds-slider-track" />
    <div class="vds-slider-progress vds-slider-track" />
    <div class="vds-slider-thumb" />
  </media-time-slider>
</media-player>

<style>
  media-player {
    --media-focus-ring: 0 0 0 3px rgb(78 156 246);
    border: 0;
    background-color: unset;
  }

  :global(:root.light) media-player {
    --media-brand: black;
    --media-slider-track-bg: #dedede;
  }

  :global(:root.dark) media-player {
    --media-brand: #f5f5f5;
  }
</style>
