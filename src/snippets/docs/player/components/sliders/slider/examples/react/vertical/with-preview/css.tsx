import { Slider } from '@vidstack/react';

// @hl-start
<Slider.Root className="media-slider" orientation="vertical">
  <Slider.Track className="media-slider-track">
    <Slider.TrackFill className="media-slider-track-fill media-slider-track" />
  </Slider.Track>

  <Slider.Preview className="media-slider-preview" noClamp>
    <Slider.Value className="media-slider-value" format="percent" />
  </Slider.Preview>

  <Slider.Thumb className="media-slider-thumb" />
</Slider.Root>;
// @hl-end
