import { TimeSlider } from '@vidstack/react';

// @hl-start
<TimeSlider.Root className="media-slider">
  <TimeSlider.Chapters className="media-slider-chapters">
    {(cues, forwardRef) =>
      cues.map((cue) => (
        <div className="media-slider-chapter" key={cue.startTime} ref={forwardRef}>
          <TimeSlider.Track className="media-slider-track">
            <TimeSlider.TrackFill className="media-slider-track-fill media-slider-track" />
            <TimeSlider.Progress className="media-slider-progress media-slider-track" />
          </TimeSlider.Track>
        </div>
      ))
    }
  </TimeSlider.Chapters>

  <TimeSlider.Thumb className="media-slider-thumb" />
</TimeSlider.Root>;
// @hl-end
