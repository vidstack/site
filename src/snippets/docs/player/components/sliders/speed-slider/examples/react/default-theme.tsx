import { SpeedSlider } from '@vidstack/react';

// @hl-start
<SpeedSlider.Root className="vds-slider">
  <SpeedSlider.Track className="vds-slider-track" />
  <SpeedSlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
  <SpeedSlider.Thumb className="vds-slider-thumb" />
  <SpeedSlider.Steps class="vds-slider-steps">
    {(step) => <div className="vds-slider-step" key={String(step)} />}
  </SpeedSlider.Steps>
</SpeedSlider.Root>;
// @hl-end
