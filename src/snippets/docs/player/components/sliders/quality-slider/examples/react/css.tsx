import { QualitySlider } from '@vidstack/react';

// @hl-start
<QualitySlider.Root className="media-slider">
  <QualitySlider.Track className="media-slider-track">
    <QualitySlider.TrackFill className="media-slider-track-fill media-slider-track" />
  </QualitySlider.Track>
  <QualitySlider.Thumb className="media-slider-thumb" />
  <QualitySlider.Steps class="media-slider-steps">
    {(step) => <div className="media-slider-step" key={String(step)} />}
  </QualitySlider.Steps>
</QualitySlider.Root>;
// @hl-end
