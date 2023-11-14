<script lang="ts">
  import { onMount } from 'svelte';
  import type { MediaMenuElement } from 'vidstack/elements';

  let menuEl: MediaMenuElement, menuItemsEl: HTMLElement;

  onMount(() => {
    requestAnimationFrame(() => {
      menuEl.open();
    });
  });

  // Temporary bug fix, needs to be resolved in core player lib.
  function onOpen() {
    requestAnimationFrame(() => {
      menuItemsEl.style.cssText = menuItemsEl.style.cssText.replace(');', '));');
    });
  }
</script>

<media-player>
  <media-menu class="vds-menu" bind:this={menuEl} on:open={onOpen}>
    <media-menu-button class="vds-menu-button vds-button text-inverse" aria-label="Settings">
      <media-icon type="settings" class="vds-rotate-icon vds-icon"></media-icon>
    </media-menu-button>
    <media-menu-items class="vds-menu-items" placement="top" offset="8" bind:this={menuItemsEl}>
      <div class="text-white">Menu items and submenus here.</div>
    </media-menu-items>
  </media-menu>
</media-player>

<style>
  media-player {
    --media-focus-ring: 0 0 0 3px rgb(78 156 246);
    border: 0;
    background-color: unset;
  }
</style>
