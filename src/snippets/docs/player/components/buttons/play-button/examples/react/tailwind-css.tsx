import { PlayButton } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { PauseIcon, PlayIcon } from '@vidstack/react/icons';

// @hl-start
<PlayButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
  <PlayIcon className="w-8 h-8 hidden group-data-[paused]:block" />
  <PauseIcon className="w-8 h-8 group-data-[paused]:hidden" />
</PlayButton>;
// @hl-end
