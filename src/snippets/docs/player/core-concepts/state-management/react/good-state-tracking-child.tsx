import { useMediaStore } from '@vidstack/react';

// This component is a child of `<MediaPlayer>`
function PlayerChildComponent() {
  // No ref required.
  const { paused } = useMediaStore();
}
