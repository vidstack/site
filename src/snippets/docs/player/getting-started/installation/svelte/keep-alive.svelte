<script lang="ts">
  import { onDestroy } from 'svelte';
  import type { MediaPlayerElement } from 'vidstack/elements';

  let player: MediaPlayerElement;

  onDestroy(() => {
    // This call will destroy the player and all child instances.
    // @hl-start
    player.destroy();
    // @hl-end
  });
</script>

<!-- `keep-alive` is forwarded to all child components. -->
<!-- @hl-start -->
<media-player keep-alive bind:this={player}>
  <!-- @hl-end -->
  <!-- ... -->
</media-player>
