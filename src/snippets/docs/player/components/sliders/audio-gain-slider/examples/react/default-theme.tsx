import { AudioGainSlider } from '@vidstack/react';

// @hl-start
<AudioGainSlider.Root className="vds-slider">
  <AudioGainSlider.Track className="vds-slider-track" />
  <AudioGainSlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
  <AudioGainSlider.Thumb className="vds-slider-thumb" />
  <AudioGainSlider.Steps class="vds-slider-steps">
    {(step) => <div className="vds-slider-step" key={String(step)} />}
  </AudioGainSlider.Steps>
</AudioGainSlider.Root>;
// @hl-end
