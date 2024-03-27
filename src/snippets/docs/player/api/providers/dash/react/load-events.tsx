import {
  MediaPlayer,
  type DASHConstructor,
  type DASHLibLoadedEvent,
  type DASHLibLoadErrorEvent,
  type DASHLibLoadStartEvent,
} from '@vidstack/react';

// Fired when we begin downloading the dashjs library.
function onLibLoadStart(nativeEvent: DASHLibLoadStartEvent) {
  //  ...
}

// Fired when the dashjs library has loaded.
function onLibLoaded(ctor: DASHConstructor, nativeEvent: DASHLibLoadedEvent) {
  //  ...
}

// Fired when the dashjs library fails to download.
function onLibLoadError(error: Error, nativeEvent: DASHLibLoadErrorEvent) {
  //  ...
}

<MediaPlayer
  onDashLibLoadStart={onLibLoadStart}
  onDashLibLoaded={onLibLoaded}
  onDashLibLoadError={onLibLoadError}
/>;
