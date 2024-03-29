import { AudioGainSlider } from '@vidstack/react';

// @hl-start
<AudioGainSlider.Root className="media-slider">
  <AudioGainSlider.Track className="media-slider-track">
    <AudioGainSlider.TrackFill className="media-slider-track-fill media-slider-track" />
  </AudioGainSlider.Track>
  <AudioGainSlider.Thumb className="media-slider-thumb" />
  <AudioGainSlider.Steps class="media-slider-steps">
    {(step) => <div className="media-slider-step" key={String(step)} />}
  </AudioGainSlider.Steps>
</AudioGainSlider.Root>;
// @hl-end
