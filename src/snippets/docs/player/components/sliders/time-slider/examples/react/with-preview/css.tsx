import { TimeSlider } from '@vidstack/react';

// @hl-start
<TimeSlider.Root className="media-slider">
  <TimeSlider.Track className="media-slider-track">
    <TimeSlider.TrackFill className="media-slider-track-fill media-slider-track" />
    <TimeSlider.Progress className="media-slider-progress media-slider-track" />
  </TimeSlider.Track>

  <TimeSlider.Preview className="media-slider-preview" noClamp>
    <TimeSlider.Thumbnail.Root src="/your_thumbnails.vtt" className="media-slider-thumbnail">
      <TimeSlider.Thumbnail.Img />
    </TimeSlider.Thumbnail.Root>
    <TimeSlider.Value className="media-slider-value" />
  </TimeSlider.Preview>

  <TimeSlider.Thumb className="media-slider-thumb" />
</TimeSlider.Root>;
// @hl-end
