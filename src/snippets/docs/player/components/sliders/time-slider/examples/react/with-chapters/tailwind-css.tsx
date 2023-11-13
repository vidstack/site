import { TimeSlider } from '@vidstack/react';

// @hl-start
<TimeSlider.Root className="group relative mx-[7.5px] inline-flex h-10 w-full max-w-[80px] cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
  <TimeSlider.Chapters className="relative flex h-full w-full items-center rounded-[1px]">
    {(cues, forwardRef) =>
      cues.map((cue) => (
        <div
          className="last-child:mr-0 relative mr-0.5 flex h-full w-full items-center rounded-[1px]"
          style={{ contain: 'layout style' }}
          key={cue.startTime}
          ref={forwardRef}
        >
          <TimeSlider.Track className="relative ring-sky-400 z-0 h-[5px] w-full rounded-sm bg-white/30 group-data-[focus]:ring-[3px]">
            <TimeSlider.TrackFill className="bg-indigo-400 absolute h-full w-[var(--chapter-fill)] rounded-sm will-change-[width]" />
            <TimeSlider.Progress className="absolute z-10 h-full w-[var(--chapter-progress)] rounded-sm bg-white/50 will-change-[width]" />
          </TimeSlider.Track>
        </div>
      ))
    }
  </TimeSlider.Chapters>

  <TimeSlider.Preview
    className="flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100"
    noClamp
  >
    <TimeSlider.ChapterTitle className="text-sm" />
    <TimeSlider.Value className="rounded-sm bg-black px-2 py-px text-[13px] font-medium" />
  </TimeSlider.Preview>

  <TimeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
</TimeSlider.Root>;
// @hl-end
