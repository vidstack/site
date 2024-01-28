import type { DefaultLayoutIcons } from '@vidstack/react/player/layouts/default';

// All icons are optional, replace only what you want.
const customIcons: Partial<DefaultLayoutIcons> = {
  AirPlayButton: {
    Default: AirPlayIcon,
    Connecting: AirPlayConnectingIcon,
    Connected: AirPlayConnectedIcon,
  },
  GoogleCastButton: {
    Default: GoogleCastIcon,
    Connecting: GoogleCastConnectingIcon,
    Connected: GoogleCastConnectedIcon,
  },
  PlayButton: {
    Play: PlayIcon,
    Pause: PauseIcon,
    Replay: ReplayIcon,
  },
  MuteButton: {
    Mute: MuteIcon,
    VolumeLow: VolumeLowIcon,
    VolumeHigh: VolumeHighIcon,
  },
  CaptionButton: {
    On: CaptionOnIcon,
    Off: CaptionOffIcon,
  },
  PIPButton: {
    Enter: EnterPIPIcon,
    Exit: ExitPIPIcon,
  },
  FullscreenButton: {
    Enter: EnterFullscreenIcon,
    Exit: ExitFullscreenIcon,
  },
  SeekButton: {
    Backward: SeekBackwardIcon,
    Forward: SeekForwardIcon,
  },
  Menu: {
    ArrowLeft: MenuArrowLeftIcon,
    ArrowRight: MenuArrowRightIcon,
    Audio: MenuAudioIcon,
    Chapters: MenuChaptersIcon,
    Quality: MenuQualityIcon,
    Captions: MenuCaptionsIcon,
    Settings: MenuSetingsIcon,
    Speed: MenuSpeedIcon,
    Font: FontIcon,
  },
  KeyboardAction: {
    Play: KeyboardPlayIcon,
    Pause: KeyboardPauseIcon,
    Mute: KeyboardMuteIcon,
    VolumeUp: KeyboardVolumeUpIcon,
    VolumeDown: KeyboardVolumeDownIcon,
    EnterFullscreen: KeyboardEnterFullscreenIcon,
    ExitFullscreen: KeyboardExitFullscreenIcon,
    EnterPiP: KeyboardEnterPiPIcon,
    ExitPiP: KeyboardExitPiPIcon,
    CaptionsOn: KeyboardCaptionsOnIcon,
    CaptionsOff: KeyboardCaptionsOffIcon,
  },
};
