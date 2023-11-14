<script lang="ts">
  import { onMount } from 'svelte';
  import type { MediaMenuElement } from 'vidstack/elements';

  const options = ['0.25x', '0.5x', '0.75x', 'Normal', '1.25x', '1.5x', '2x'];

  let value = 'Normal',
    menuEl: MediaMenuElement;

  onMount(() => {
    requestAnimationFrame(() => {
      menuEl.open();
    });
  });
</script>

<media-player>
  <media-menu class="vds-menu" bind:this={menuEl}>
    <media-menu-button class="vds-menu-button vds-button text-inverse" aria-label="Settings">
      <media-icon type="settings" class="vds-rotate-icon vds-icon"></media-icon>
    </media-menu-button>
    <media-menu-items class="vds-menu-items" placement="top" offset="8">
      <media-menu>
        <media-menu-button class="vds-menu-button">
          <media-icon type="chevron-left" class="vds-menu-button-close-icon"></media-icon>
          <media-icon type="odometer" class="vds-menu-button-icon"></media-icon>
          <span class="vds-menu-button-label">Speed</span>
          <span class="vds-menu-button-hint">{value}</span>
          <media-icon type="chevron-right" class="vds-menu-button-open-icon"></media-icon>
        </media-menu-button>
        <media-menu-items class="vds-menu-items">
          <media-radio-group class="vds-radio-group" {value}>
            {#each options as option}
              <media-radio
                class="vds-radio"
                value={option}
                on:select={() => {
                  value = option;
                }}
              >
                <span class="vds-radio-check" />
                <span class="vds-radio-label">{option}</span>
              </media-radio>
            {/each}
          </media-radio-group>
        </media-menu-items>
      </media-menu>
    </media-menu-items>
  </media-menu>
</media-player>

<style>
  media-player {
    --media-focus-ring: 0 0 0 3px rgb(78 156 246);
    border: 0;
    background-color: unset;
    transform: translateY(100px);
  }

  .vds-radio-check {
    border: 2px solid rgb(245 245 245 / 0.5);
  }

  :global(.vds-radio[aria-checked='true']) .vds-radio-check {
    border: 2px solid #f5f5f5;
  }

  .vds-menu-items:not([data-submenu]) {
    height: auto;
  }
</style>
