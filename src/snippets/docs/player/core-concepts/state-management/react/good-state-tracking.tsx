import { useRef } from 'react';

import {
  MediaPlayer,
  useMediaState,
  useMediaStore,
  type MediaPlayerInstance,
} from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  // ~~ Option 1
  // - This hook is simpler when accessing a single piece of state.
  // - This hook is much cheaper/faster than `useMediaStore`.
  const paused = useMediaState('paused', player);

  // ~~ Option 2
  // - This hook creates a live subscription to the media paused state.
  // - All state subscriptions are lazily created on prop access.
  // - This hook makes it easy to access all media state.
  const { paused } = useMediaStore(player);

  return <MediaPlayer ref={player}>{/* ... */}</MediaPlayer>;
}
