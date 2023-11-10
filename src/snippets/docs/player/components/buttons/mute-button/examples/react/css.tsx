import { MuteButton } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { MuteIcon, VolumeHighIcon, VolumeLowIcon } from '@vidstack/react/icons';

// @hl-start
<MuteButton className="media-button">
  <MuteIcon className="mute-icon" />
  <VolumeLowIcon className="volume-low-icon" />
  <VolumeHighIcon className="volume-high-icon" />
</MuteButton>;
// @hl-end
