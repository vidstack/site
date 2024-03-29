import { SpeedSlider } from '@vidstack/react';

// @hl-start
<SpeedSlider.Root className="media-slider">
  <SpeedSlider.Track className="media-slider-track">
    <SpeedSlider.TrackFill className="media-slider-track-fill media-slider-track" />
  </SpeedSlider.Track>
  <SpeedSlider.Thumb className="media-slider-thumb" />
  <SpeedSlider.Steps class="media-slider-steps">
    {(step) => <div className="media-slider-step" key={String(step)} />}
  </SpeedSlider.Steps>
</SpeedSlider.Root>;
// @hl-end
