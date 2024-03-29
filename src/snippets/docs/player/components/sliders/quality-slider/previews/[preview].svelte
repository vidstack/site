<media-player style="--media-focus-ring: 0 0 0 3px rgb(78 156 246);">
  <media-slider class="vds-slider w-[350px]" max={300} step={25} value={150}>
    <div class="vds-slider-track bg-inverse/20" />
    <div class="vds-slider-track-fill vds-slider-track bg-inverse" />
    <div class="vds-slider-thumb" />
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  </media-slider>
</media-player>
