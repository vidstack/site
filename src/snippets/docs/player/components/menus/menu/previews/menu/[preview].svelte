<script lang="ts">
  import { onMount } from 'svelte';
  import type { MediaMenuElement } from 'vidstack/elements';

  let menuEl: MediaMenuElement;

  onMount(() => {
    requestAnimationFrame(() => {
      menuEl.open();
    });
  });
</script>

<media-player class="border-0 bg-transparent" style="--media-focus-ring: 0 0 0 3px rgb(78 156 246)">
  <media-menu class="vds-menu" bind:this={menuEl}>
    <media-menu-button class="vds-menu-button vds-button text-inverse" aria-label="Settings">
      <media-icon type="settings" class="vds-rotate-icon vds-icon"></media-icon>
    </media-menu-button>
    <media-menu-items class="vds-menu-items" placement="top" offset="8">
      <div>Menu items and submenus here.</div>
    </media-menu-items>
  </media-menu>
</media-player>
