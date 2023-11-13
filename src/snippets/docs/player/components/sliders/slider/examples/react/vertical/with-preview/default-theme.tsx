import { Slider } from '@vidstack/react';

// @hl-start
<Slider.Root className="vds-slider" orientation="vertical">
  <Slider.Track className="vds-slider-track" />
  <Slider.TrackFill className="vds-slider-track-fill vds-slider-track" />
  <Slider.Preview className="vds-slider-preview" noClamp>
    <Slider.Value className="vds-slider-value" format="percent" />
  </Slider.Preview>
  <Slider.Thumb className="vds-slider-thumb" />
</Slider.Root>;
// @hl-end
