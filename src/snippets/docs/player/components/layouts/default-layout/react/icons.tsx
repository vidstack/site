import type { DefaultLayoutIcons } from '@vidstack/react/player/layouts/default';

// Icon should be: `() => ReactNode`
const None = () => null;

// All icons are optional, replace only what you want.
const customIcons: Partial<DefaultLayoutIcons> = {
  AirPlayButton: {
    Default: None,
    Connecting: None,
    Connected: None,
  },
  GoogleCastButton: {
    Default: None,
    Connecting: None,
    Connected: None,
  },
  PlayButton: {
    Play: None,
    Pause: None,
    Replay: None,
  },
  MuteButton: {
    Mute: None,
    VolumeLow: None,
    VolumeHigh: None,
  },
  CaptionButton: {
    On: None,
    Off: None,
  },
  PIPButton: {
    Enter: None,
    Exit: None,
  },
  FullscreenButton: {
    Enter: None,
    Exit: None,
  },
  SeekButton: {
    Backward: None,
    Forward: None,
  },
  DownloadButton: {
    Default: None,
  },
  Menu: {
    Accessibility: None,
    ArrowLeft: None,
    ArrowRight: None,
    Audio: None,
    AudioBoostUp: None,
    AudioBoostDown: None,
    Chapters: None,
    Captions: None,
    Playback: None,
    Settings: None,
    SpeedUp: None,
    SpeedDown: None,
    QualityUp: None,
    QualityDown: None,
    FontSizeUp: None,
    FontSizeDown: None,
    OpacityUp: None,
    OpacityDown: None,
    RadioCheck: None,
  },
  KeyboardDisplay: {
    Play: None,
    Pause: None,
    Mute: None,
    VolumeUp: None,
    VolumeDown: None,
    EnterFullscreen: None,
    ExitFullscreen: None,
    EnterPiP: None,
    ExitPiP: None,
    CaptionsOn: None,
    CaptionsOff: None,
    SeekForward: None,
    SeekBackward: None,
  },
};
