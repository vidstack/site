import { TimeSlider } from '@vidstack/react';

// @hl-start
<TimeSlider.Root className="vds-time-slider vds-slider">
  <TimeSlider.Track className="vds-slider-track" />
  <TimeSlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
  <TimeSlider.Progress className="vds-slider-progress vds-slider-track" />

  <TimeSlider.Preview className="vds-slider-preview" noClamp>
    <TimeSlider.Thumbnail.Root
      src="/your_thumbnails.vtt"
      className="vds-slider-thumbnail vds-thumbnail"
    >
      <TimeSlider.Thumbnail.Img />
    </TimeSlider.Thumbnail.Root>
    <TimeSlider.Value className="vds-slider-value" />
  </TimeSlider.Preview>

  <TimeSlider.Thumb className="vds-slider-thumb" />
</TimeSlider.Root>;
// @hl-end
