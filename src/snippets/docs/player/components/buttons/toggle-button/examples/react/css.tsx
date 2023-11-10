import { ToggleButton } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { ThumbsDownIcon, ThumbsUpIcon } from '@vidstack/react/icons';

// @hl-start
<ToggleButton className="media-button" aria-label="Like video">
  <ThumbsUpIcon className="pressed-icon" />
  <ThumbsDownIcon className="not-pressed-icon" />
</ToggleButton>;
// @hl-end
