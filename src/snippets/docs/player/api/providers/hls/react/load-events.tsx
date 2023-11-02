import {
  MediaPlayer,
  type HLSConstructor,
  type HLSLibLoadedEvent,
  type HLSLibLoadErrorEvent,
  type HLSLibLoadStartEvent,
} from '@vidstack/react';

// Fired when we begin downloading the hls.js library.
function onLibLoadStart(nativeEvent: HLSLibLoadStartEvent) {
  //  ...
}

// Fired when the hls.js library has loaded.
function onLibLoaded(ctor: HLSConstructor, nativeEvent: HLSLibLoadedEvent) {
  //  ...
}

// Fired when the hls.js library fails to download.
function onLibLoadError(error: Error, nativeEvent: HLSLibLoadErrorEvent) {
  //  ...
}

<MediaPlayer
  onHlsLibLoadStart={onLibLoadStart}
  onHlsLibLoaded={onLibLoaded}
  onHlsLibLoadError={onLibLoadError}
/>;
