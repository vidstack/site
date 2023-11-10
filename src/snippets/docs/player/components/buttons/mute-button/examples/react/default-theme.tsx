import { MuteButton } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { MuteIcon, VolumeHighIcon, VolumeLowIcon } from '@vidstack/react/icons';

// @hl-start
<MuteButton className="vds-button">
  <MuteIcon className="mute-icon vds-icon" />
  <VolumeLowIcon className="volume-low-icon vds-icon" />
  <VolumeHighIcon className="volume-high-icon vds-icon" />
</MuteButton>;
// @hl-end
