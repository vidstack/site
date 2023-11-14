<media-player>
  <media-slider class="vds-slider w-[400px]" value={50}>
    <div class="vds-slider-track" />
    <div class="vds-slider-track-fill vds-slider-track" />
    <div class="vds-slider-thumb" />
  </media-slider>
</media-player>

<style>
  media-player {
    --media-focus-ring: 0 0 0 3px rgb(78 156 246);
  }

  :global(:root.light) media-player {
    --media-brand: black;
    --media-slider-track-bg: #dedede;
  }

  :global(:root.dark) media-player {
    --media-brand: #f5f5f5;
  }
</style>
