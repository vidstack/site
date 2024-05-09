<script lang="ts">
  import clsx from 'clsx';

  import { onMount } from 'svelte';

  import type { LayoutType, SourceType, TextTracks } from './media-player.svelte';

  export let src: string | undefined;
  export let type: SourceType;
  export let layout: LayoutType;
  export let title: string | null | undefined;
  export let poster: string | null | undefined;
  export let thumbnails: string | undefined;
  export let textTracks: TextTracks | undefined;

  let playerImport: any;

  onMount(() => {
    playerImport = import('./media-player.svelte');
  });
</script>

<div
  class={clsx(
    'w-full',
    type !== 'audio' ? 'aspect-video min-w-[275px] @sm:max-w-[90%]' : 'min-h-[80px]',
  )}
>
  {#if playerImport}
    {#await playerImport then { default: Player }}
      <Player {src} {type} {title} {poster} {thumbnails} {textTracks} {layout} />
    {/await}
  {/if}
</div>
