import { Spinner } from '@vidstack/react';

function BufferingIndicator() {
  return (
    <div className="media-buffering-indicator">
      <Spinner.Root className="media-buffering-spinner" size={96}>
        <Spinner.Track className="media-buffering-track" width={8} />
        <Spinner.TrackFill className="media-buffering-track-fill" width={8} />
      </Spinner.Root>
    </div>
  );
}
