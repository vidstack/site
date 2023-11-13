import { TimeSlider } from '@vidstack/react';

// @hl-start
<TimeSlider.Root className="vds-time-slider vds-slider">
  <TimeSlider.Chapters className="vds-slider-chapters">
    {(cues, forwardRef) =>
      cues.map((cue) => (
        <div className="vds-slider-chapter" key={cue.startTime} ref={forwardRef}>
          <TimeSlider.Track className="media-slider-track">
            <TimeSlider.TrackFill className="media-slider-track-fill media-slider-track" />
            <TimeSlider.Progress className="media-slider-progress media-slider-track" />
          </TimeSlider.Track>
        </div>
      ))
    }
  </TimeSlider.Chapters>

  <TimeSlider.Preview className="vds-slider-preview">
    <TimeSlider.ChapterTitle className="vds-slider-chapter-title" />
    <TimeSlider.Value className="vds-slider-value" />
  </TimeSlider.Preview>

  <TimeSlider.Thumb className="vds-slider-thumb" />
</TimeSlider.Root>;
// @hl-end
