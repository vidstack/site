<script lang="ts">
  import { onMount } from 'svelte';
  import type { MediaMenuElement } from 'vidstack/elements';

  let options = ['Auto', '1080p', '720p'],
    currentQuality = '1080p',
    bitRates = [null, '4 Mbps', '2 Mbps'];

  let value = 'Auto',
    menuEl: MediaMenuElement,
    menuItemsEl: HTMLElement;

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
      <media-menu>
        <media-menu-button class="vds-menu-button">
          <media-icon type="chevron-left" class="vds-menu-button-close-icon"></media-icon>
          <media-icon type="settings-menu" class="vds-menu-button-icon"></media-icon>
          <span class="vds-menu-button-label">Quality</span>
          <span class="vds-menu-button-hint">
            {value === 'Auto' ? `Auto (${currentQuality})` : value}
          </span>
          <media-icon type="chevron-right" class="vds-menu-button-open-icon"></media-icon>
        </media-menu-button>
        <media-menu-items class="vds-menu-items">
          <media-radio-group class="vds-radio-group" {value}>
            {#each options as option, i}
              <media-radio
                class="vds-radio"
                value={option}
                on:select={() => {
                  value = option;
                  if (value !== 'Auto') {
                    currentQuality = option;
                  }
                }}
              >
                <span class="vds-radio-check" />
                <span class="vds-radio-label">{option}</span>
                {#if bitRates[i]}
                  <span class="vds-radio-hint">{bitRates[i]}</span>
                {/if}
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
</style>
