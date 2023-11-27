import { TimeSlider } from '@vidstack/react';

// @hl-start
<TimeSlider.Root className="group relative mx-[7.5px] inline-flex h-10 w-full cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
  <TimeSlider.Track className="relative ring-sky-400 z-0 h-[5px] w-full rounded-sm bg-white/30 group-data-[focus]:ring-[3px]">
    <TimeSlider.TrackFill className="bg-indigo-400 absolute h-full w-[var(--slider-fill)] rounded-sm will-change-[width]" />
    <TimeSlider.Progress className="absolute z-10 h-full w-[var(--slider-progress)] rounded-sm bg-white/50 will-change-[width]" />
  </TimeSlider.Track>
  <TimeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
</TimeSlider.Root>;
// @hl-end
