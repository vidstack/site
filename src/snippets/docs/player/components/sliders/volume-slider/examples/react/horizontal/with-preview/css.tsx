import { VolumeSlider } from '@vidstack/react';

// @hl-start
<VolumeSlider.Root className="media-slider">
  <VolumeSlider.Track className="media-slider-track">
    <VolumeSlider.TrackFill className="media-slider-track-fill media-slider-track" />
  </VolumeSlider.Track>
  <VolumeSlider.Preview className="media-slider-preview" noClamp>
    <VolumeSlider.Value className="media-slider-value" />
  </VolumeSlider.Preview>
  <VolumeSlider.Thumb className="media-slider-thumb" />
</VolumeSlider.Root>;
// @hl-end
