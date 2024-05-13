<script lang="ts" context="module">
  export type SourceType =
    | 'audio'
    | 'video'
    | 'live'
    | 'hls'
    | 'dash'
    | 'youtube'
    | 'vimeo'
    | 'custom';

  export type LayoutType = 'default' | 'plyr';

  export type TextTracks = Record<string, any>[];

  export const sourceTypes = [
    'Audio',
    'Video',
    'HLS',
    'DASH',
    'Live',
    'YouTube',
    'Vimeo',
    'Custom',
  ];

  export const defaultTitle = 'Sprite Fight';
  export const defaultPoster = 'https://files.vidstack.io/sprite-fight/poster.webp';
  export const defaultThumbnails = 'https://files.vidstack.io/sprite-fight/thumbnails.vtt';
  export const defaultTextTracks = [
    {
      src: 'https://files.vidstack.io/sprite-fight/subs/english.vtt',
      label: 'English',
      srclang: 'en-US',
      kind: 'subtitles',
      default: true,
    },
    {
      src: 'https://files.vidstack.io/sprite-fight/subs/spanish.vtt',
      label: 'Spanish',
      srclang: 'es-ES',
      kind: 'subtitles',
    },
    {
      src: 'https://files.vidstack.io/sprite-fight/chapters.vtt',
      srclang: 'en-US',
      kind: 'chapters',
      default: true,
    },
  ];

  export function getDefaultSource(type: SourceType) {
    switch (type) {
      case 'audio':
        return 'https://files.vidstack.io/sprite-fight/audio.mp3';
      case 'video':
        return 'https://files.vidstack.io/sprite-fight/720p.mp4';
      case 'hls':
        return 'https://files.vidstack.io/sprite-fight/hls/stream.m3u8';
      case 'dash':
        return 'https://files.vidstack.io/sprite-fight/dash/stream.mpd';
      case 'youtube':
        return 'youtube/_cMxraX_5RE';
      case 'vimeo':
        return 'vimeo/640499893';
      case 'live':
        return 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8';
      case 'custom':
        return '';
    }
  }
</script>

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

  import { isArray } from '~/utils/unit';
  import { onMount } from 'svelte';
  import type { PlayerSrc } from 'vidstack';
  import type { MediaPlayerElement } from 'vidstack/elements';

  export let src: PlayerSrc | undefined = undefined;
  export let title: string = defaultTitle;
  export let poster: string | null = defaultPoster;
  export let thumbnails: string | null = defaultThumbnails;
  export let type: SourceType = 'video';
  export let layout: LayoutType = 'default';
  export let textTracks: TextTracks | null = null;
  export let theme: string | null = null;

  let player: MediaPlayerElement;

  onMount(() => {
    player.title = title;
    return () => {
      player?.destroy();
    };
  });

  $: if (player) player.title = title;
  $: defaultSrc = getDefaultSource(type);
  $: currentSrc = type === 'custom' ? src : defaultSrc;
  $: isDefaultLive = currentSrc === getDefaultSource('live');
  $: isDefaultPoster = poster === defaultPoster;
  $: isDefaultSrc = currentSrc === defaultSrc;
  $: currentThumbnails = !isDefaultLive ? thumbnails : null;
  $: currentTextTracks =
    isDefaultSrc && !isDefaultLive && !isArray(textTracks) ? defaultTextTracks : textTracks;
  $: posterAlt = isDefaultPoster
    ? 'Girl walks into sprite gnomes around her friend on a campfire in danger!'
    : null;
</script>

<media-player
  title="Sprite Fight"
  src={currentSrc}
  class="w-full"
  crossorigin
  playsinline
  keep-alive
  {poster}
  on:view-type-change
  bind:this={player}
>
  <media-provider class="block">
    {#if layout === 'default'}
      <media-poster class="vds-poster" alt={posterAlt}></media-poster>
    {/if}
    {#if !isDefaultLive}
      {#each currentTextTracks as track}
        <track {...track} />
      {/each}
    {/if}
  </media-provider>
  {#if layout === 'default'}
    <media-audio-layout color-scheme={theme} />
    <media-video-layout thumbnails={currentThumbnails} color-scheme={theme} />
  {:else if layout === 'plyr'}
    <media-plyr-layout thumbnails={currentThumbnails} />
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
