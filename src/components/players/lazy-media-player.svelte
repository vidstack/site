<script lang="ts">
  import clsx from 'clsx';

  import { onMount } from 'svelte';

  import type { LayoutProps } from './defaults';

  export let layout: LayoutProps;
  export let hls: Record<string, any> = {};
  export let dash: Record<string, any> = {};
  export let events: string[] = [];

  let playerImport: any;

  onMount(() => {
    playerImport = import('./media-player.svelte');
  });
</script>

<div
  class={clsx(
    'w-full',
    $$restProps.viewType !== 'audio'
      ? 'aspect-video min-w-[275px] @sm:max-w-[90%]'
      : 'min-h-[80px]',
  )}
>
  {#if playerImport}
    {#await playerImport then { default: Player }}
      <Player {...$$restProps} {layout} {hls} {dash} {events} on:view-type-change />
    {/await}
  {/if}
</div>
