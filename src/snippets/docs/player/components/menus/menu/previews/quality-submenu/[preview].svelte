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
  class="border-0 bg-transparent translate-y-24"
  style="--media-focus-ring: 0 0 0 3px rgb(78 156 246)"
>
  <media-menu class="vds-menu" bind:this={menuEl}>
    <media-menu-button class="vds-menu-button vds-button text-inverse" aria-label="Settings">
      <media-icon type="settings" class="vds-rotate-icon vds-icon"></media-icon>
    </media-menu-button>
    <media-menu-items class="vds-menu-items h-auto" placement="top" offset="8">
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
                <span
                  class="vds-radio-check"
                  style="--media-menu-radio-check-active-color: white;"
                />
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
