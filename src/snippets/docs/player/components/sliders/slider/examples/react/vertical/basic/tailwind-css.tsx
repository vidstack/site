import { Slider } from '@vidstack/react';

// @hl-start
<Slider.Root
  className="group relative my-[7.5px] inline-flex w-10 h-full max-h-[80px] cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden"
  orientation="vertical"
>
  <Slider.Track className="relative ring-sky-400 z-0 w-[5px] h-full rounded-sm bg-white/30 group-data-[focus]:ring-[3px]">
    <Slider.TrackFill className="bg-indigo-400 absolute w-full h-[var(--slider-fill)] rounded-sm will-change-[height]" />
  </Slider.Track>
  <Slider.Thumb className="absolute left-1/2 bottom-[var(--slider-fill)] z-20 h-[15px] w-[15px] -translate-x-1/2 translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[bottom]" />
</Slider.Root>;
// @hl-end
