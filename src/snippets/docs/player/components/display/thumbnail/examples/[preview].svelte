<script>
  let value = 0;

  function onValueChange(e) {
    value = e.detail;
  }
</script>

<media-player class="not-prose flex flex-col justify-center items-center min-w-[375px]">
  <media-thumbnail
    src="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
    time={value}
    class="vds-thumbnail"
  ></media-thumbnail>
  <media-slider class="vds-slider mt-4" on:value-change={onValueChange} aria-label="Thumbnail time">
    <div class="vds-slider-track" />
    <div class="vds-slider-track-fill vds-slider-track" />
    <div class="vds-slider-thumb" />
  </media-slider>
</media-player>

<style>
  media-slider {
    --media-slider-track-bg: #dedede;
    --media-slider-track-fill-bg: #989898;
  }

  .vds-slider-thumb {
    opacity: 1 !important;
  }
</style>
