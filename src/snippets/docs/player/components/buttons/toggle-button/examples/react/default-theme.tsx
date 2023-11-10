import { ToggleButton } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { ThumbsDownIcon, ThumbsUpIcon } from '@vidstack/react/icons';

// @hl-start
<ToggleButton className="vds-button" aria-label="Like video">
  <ThumbsUpIcon className="pressed-icon vds-icon" />
  <ThumbsDownIcon className="not-pressed-icon vds-icon" />
</ToggleButton>;
// @hl-end
