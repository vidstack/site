import { ToggleButton } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { ThumbsDownIcon, ThumbsUpIcon } from '@vidstack/react/icons';

// @hl-start
<ToggleButton
  className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4"
  aria-label="Like video"
>
  <ThumbsUpIcon className="w-8 h-8 hidden group-data-[pressed]:block" />
  <ThumbsDownIcon className="w-8 h-8 group-data-[pressed]:hidden" />
</ToggleButton>;
// @hl-end
