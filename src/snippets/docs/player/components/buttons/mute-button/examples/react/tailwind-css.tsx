import { MuteButton } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { MuteIcon, VolumeHighIcon, VolumeLowIcon } from '@vidstack/react/icons';

// @hl-start
<MuteButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
  <MuteIcon className="w-8 h-8 hidden group-data-[state='muted']:block" />
  <VolumeLowIcon className="w-8 h-8 hidden group-data-[state='low']:block" />
  <VolumeHighIcon className="w-8 h-8 hidden group-data-[state='high']:block" />
</MuteButton>;
// @hl-end
