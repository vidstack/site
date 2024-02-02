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

  import { onMount } from 'svelte';
  import type { MediaPlayerElement } from 'vidstack/elements';

  export let type: 'audio' | 'video' | 'live' = 'video';
  export let layout: 'default' | 'plyr' = 'default';

  let player: MediaPlayerElement;

  $: console.log(type);

  onMount(() => {
    player.title = 'Sprite Fight';
    return () => {
      player?.destroy();
    };
  });

  const audioSrc = 'https://media-files.vidstack.io/sprite-fight/audio.mp3',
    videoSrc = 'https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8',
    liveSrc = 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8';

  $: thumbnails =
    type === 'live' ? '' : 'https://media-files.vidstack.io/sprite-fight/thumbnails.vtt';
</script>

<media-player
  title="Sprite Fight"
  src={type === 'audio' ? audioSrc : type === 'video' ? videoSrc : liveSrc}
  class="w-full"
  crossorigin
  playsinline
  keep-alive
  poster="https://media-files.vidstack.io/sprite-fight/poster.webp"
  style={type === 'audio' ? '' : 'aspect-ratio: 16/9;'}
  bind:this={player}
>
  <media-provider class="block">
    {#if type === 'video' && layout === 'default'}
      <media-poster
        class="vds-poster"
        alt="Girl walks into sprite gnomes around her friend on a campfire in danger!"
      ></media-poster>
    {/if}
    {#if type !== 'live'}
      <track
        src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
        label="English"
        srclang="en-US"
        kind="subtitles"
        default
      />
      <track
        src="https://media-files.vidstack.io/sprite-fight/subs/spanish.vtt"
        label="Spanish"
        srclang="es-ES"
        kind="subtitles"
      />
      <track
        src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
        srclang="en-US"
        kind="chapters"
        default
      />
    {/if}
  </media-provider>
  {#if layout === 'default'}
    <media-audio-layout />
    <media-video-layout {thumbnails} />
  {:else if layout === 'plyr'}
    <media-plyr-layout thumbnails={type === 'video' ? thumbnails : null} />
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
</style>
