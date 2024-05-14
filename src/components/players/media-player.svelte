<script lang="ts">
  // Styles
  import 'vidstack/player/styles/default/theme.css';
  import 'vidstack/player/styles/default/layouts/audio.css';
  import 'vidstack/player/styles/default/layouts/video.css';
  import 'vidstack/player/styles/plyr/theme.css';
  // Elements
  import 'vidstack/player';
  import 'vidstack/player/layouts';
  import 'vidstack/player/ui';

  import { DisposalBin, listenEvent } from '~/utils/events';
  import { pascalToKebabCase } from '~/utils/string';
  import { onDestroy, onMount } from 'svelte';
  import { isDASHProvider, isHLSProvider, type MediaProviderChangeEvent } from 'vidstack';
  import type { MediaPlayerElement } from 'vidstack/elements';

  import { type LayoutProps, type TextTracks } from './defaults';

  export let viewType: 'audio' | 'video' = 'video';
  export let layout: LayoutProps = { type: 'default' };
  export let textTracks: TextTracks = [];
  export let hls: Record<string, any> = {};
  export let dash: Record<string, any> = {};
  export let events: string[] = [];

  let playerRef: MediaPlayerElement,
    layoutRef: HTMLElement,
    hasMounted = false;

  onMount(() => {
    setTimeout(() => {
      // No idea...
      if (playerRef) playerRef.title = $$restProps.title;
    }, 0);

    const disposal = new DisposalBin();

    if (playerRef) {
      function log(event: Event) {
        console.groupCollapsed(`🔔 ${event.type}`);
        console.log(event);
        console.groupEnd();
      }

      for (let event of events) {
        if (event.startsWith('on')) {
          event = pascalToKebabCase(event.slice(2));
        }

        disposal.add(listenEvent(playerRef, event as any, log));
      }
    }

    hasMounted = true;
    return () => disposal.dispose();
  });

  onDestroy(() => playerRef?.destroy());

  function setProp(el: any, prop: string, value: any) {
    if (prop in el) {
      el[prop] = value;
    } else {
      playerRef.setAttribute(prop, value + '');
    }
  }

  $: if (playerRef && hasMounted) {
    for (const prop of Object.keys($$restProps)) {
      const value = $$restProps[prop];
      setProp(playerRef, prop, value);
    }
  }

  $: if (playerRef && hasMounted) {
    playerRef.viewType = viewType;
  }

  $: if (layoutRef && hasMounted) {
    for (const prop of Object.keys($$restProps)) {
      const value = $$restProps[prop];
      setProp(layoutRef, prop, value);
    }
  }

  $: if (playerRef && hasMounted) {
    playerRef.textTracks.clear();

    for (const track of textTracks) {
      playerRef.textTracks.add(track as any);
    }
  }

  function onProviderChange(event: MediaProviderChangeEvent) {
    const provider = event.detail;
    if (isHLSProvider(provider)) {
      provider.config = hls;
    } else if (isDASHProvider(provider)) {
      provider.config = dash;
    }
  }
</script>

<media-player
  class="w-full"
  keep-alive
  on:view-type-change
  bind:this={playerRef}
  on:provider-change={onProviderChange}
>
  <media-provider class="block">
    {#if layout.type !== 'plyr' && viewType !== 'audio'}
      <media-poster class="vds-poster"></media-poster>
    {/if}
  </media-provider>
  {#if layout.type === 'default'}
    {#if viewType === 'audio'}
      <media-audio-layout {...layout} bind:this={layoutRef} />
    {:else}
      <media-video-layout {...layout} bind:this={layoutRef} />
    {/if}
  {:else if layout.type === 'plyr'}
    <media-plyr-layout {...layout} bind:this={layoutRef} />
  {/if}
</media-player>

<style>
  media-player {
    --media-slider-value-gap: -4px;
  }

  media-player :global(img),
  media-player :global(video) {
    margin: 0 !important;
  }

  :global(media-player[data-view-type='audio'] media-poster) {
    display: none;
  }
</style>
