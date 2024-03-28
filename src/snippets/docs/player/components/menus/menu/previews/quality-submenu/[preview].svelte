<script lang="ts">
  import { onMount } from 'svelte';
  import type { MediaMenuElement } from 'vidstack/elements';

  let options = ['Auto', '1080p', '720p'],
    currentQuality = '1080p',
    bitRates = [null, '4 Mbps', '2 Mbps'];

  let value = 'Auto',
    menuEl: MediaMenuElement;

  onMount(() => {
    requestAnimationFrame(() => {
      menuEl.open();
    });
  });
</script>

<media-player
  class="translate-y-24 border-0 bg-transparent"
  style="--media-focus-ring: 0 0 0 3px rgb(78 156 246)"
>
  <media-menu class="vds-menu" bind:this={menuEl}>
    <media-menu-button class="vds-menu-button vds-button text-inverse" aria-label="Settings">
      <media-icon type="settings" class="vds-rotate-icon vds-icon"></media-icon>
    </media-menu-button>
    <media-menu-items class="vds-menu-items" placement="top" offset="8">
      <media-menu>
        <media-menu-button class="vds-menu-item">
          <media-icon type="chevron-left" class="vds-menu-close-icon"></media-icon>
          <media-icon type="settings-menu" class="vds-icon"></media-icon>
          <span class="vds-menu-item-label">Quality</span>
          <span class="vds-menu-item-hint">
            {value === 'Auto' ? `Auto (${currentQuality})` : value}
          </span>
          <media-icon type="chevron-right" class="vds-menu-open-icon"></media-icon>
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
                <media-icon class="vds-icon" type="check"></media-icon>
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
