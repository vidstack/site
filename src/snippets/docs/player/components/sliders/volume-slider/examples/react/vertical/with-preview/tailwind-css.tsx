import { VolumeSlider } from '@vidstack/react';

// @hl-start
<VolumeSlider.Root
  className="group relative my-[7.5px] inline-flex w-10 h-full max-h-[80px] cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden"
  orientation="vertical"
>
  <VolumeSlider.Track className="relative ring-sky-400 z-0 w-[5px] h-full rounded-sm bg-white/30 group-data-[focus]:ring-[3px]">
    <VolumeSlider.TrackFill className="bg-indigo-400 absolute w-full h-[var(--slider-fill)] rounded-sm will-change-[height]" />
  </VolumeSlider.Track>

  <VolumeSlider.Preview
    className="flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100 pointer-events-none"
    noClamp
  >
    <VolumeSlider.Value className="rounded-sm bg-black px-2 py-px text-[13px] font-medium text-white" />
  </VolumeSlider.Preview>

  <VolumeSlider.Thumb className="absolute left-1/2 bottom-[var(--slider-fill)] z-20 h-[15px] w-[15px] -translate-x-1/2 translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[bottom]" />
</VolumeSlider.Root>;
// @hl-end
