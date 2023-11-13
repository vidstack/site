import { VolumeSlider } from '@vidstack/react';

// @hl-start
<VolumeSlider.Root className="group relative mx-[7.5px] inline-flex h-10 w-full max-w-[80px] cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
  <VolumeSlider.Track className="relative ring-sky-400 z-0 h-[5px] w-full rounded-sm bg-white/30 group-data-[focus]:ring-[3px]">
    <VolumeSlider.TrackFill className="bg-indigo-400 absolute h-full w-[var(--slider-fill)] rounded-sm will-change-[width]" />
  </VolumeSlider.Track>
  <VolumeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
</VolumeSlider.Root>;
// @hl-end
