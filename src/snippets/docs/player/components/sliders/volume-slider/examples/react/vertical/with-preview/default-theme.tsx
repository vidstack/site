import { VolumeSlider } from '@vidstack/react';

// @hl-start
<VolumeSlider.Root className="vds-slider" orientation="vertical">
  <VolumeSlider.Track className="vds-slider-track" />
  <VolumeSlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
  <VolumeSlider.Preview className="vds-slider-preview" noClamp>
    <VolumeSlider.Value className="vds-slider-value" />
  </VolumeSlider.Preview>
  <VolumeSlider.Thumb className="vds-slider-thumb" />
</VolumeSlider.Root>;
// @hl-end
