import { QualitySlider } from '@vidstack/react';

// @hl-start
<QualitySlider.Root className="vds-slider">
  <QualitySlider.Track className="vds-slider-track" />
  <QualitySlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
  <QualitySlider.Thumb className="vds-slider-thumb" />
  <QualitySlider.Steps class="vds-slider-steps">
    {(step) => <div className="vds-slider-step" key={String(step)} />}
  </QualitySlider.Steps>
</QualitySlider.Root>;
// @hl-end
