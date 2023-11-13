import { Slider } from '@vidstack/react';

// @hl-start
<Slider.Root className="vds-slider">
  <Slider.Track className="vds-slider-track">
    <Slider.TrackFill className="vds-slider-track-fill vds-slider-track" />
  </Slider.Track>
  <Slider.Preview className="vds-slider-preview" noClamp>
    <Slider.Value className="vds-slider-value" format="percent" />
  </Slider.Preview>
  <Slider.Thumb className="vds-slider-thumb" />
</Slider.Root>;
// @hl-end
