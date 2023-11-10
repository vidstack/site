import { CaptionButton } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { ClosedCaptionsIcon, ClosedCaptionsOnIcon } from '@vidstack/react/icons';

// @hl-start
<CaptionButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
  <ClosedCaptionsOnIcon className="w-8 h-8 hidden group-data-[active]:block" />
  <ClosedCaptionsIcon className="w-8 h-8 group-data-[active]:hidden" />
</CaptionButton>;
// @hl-end
