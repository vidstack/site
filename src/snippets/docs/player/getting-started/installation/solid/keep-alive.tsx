import { onCleanup } from 'solid-js';
import type { MediaPlayerElement } from 'vidstack/elements';

function Player() {
  let player: MediaPlayerElement;

  onCleanup(() => {
    // This call will destroy the player and all child instances.
    // @hl-start
    player.destroy();
    // @hl-end
  });

  return (
    // `keep-alive` is forwarded to all child components.
    // @hl-start
    <media-player keep-alive>{/* ... */}</media-player>
    // @hl-end
  );
}
