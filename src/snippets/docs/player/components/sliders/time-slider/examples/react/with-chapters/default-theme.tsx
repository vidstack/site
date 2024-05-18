import { TimeSlider } from '@vidstack/react';

// @hl-start
<TimeSlider.Root className="vds-time-slider vds-slider">
  <TimeSlider.Chapters className="vds-slider-chapters">
    {(cues, forwardRef) =>
      cues.map((cue) => (
        <div className="vds-slider-chapter" key={cue.startTime} ref={forwardRef}>
          <TimeSlider.Track className="vds-slider-track">
            <TimeSlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
            <TimeSlider.Progress className="vds-slider-progress vds-slider-track" />
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
