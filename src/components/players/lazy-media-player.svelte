<script lang="ts">
  import clsx from 'clsx';

  import { onMount } from 'svelte';

  export let type: 'audio' | 'video' | 'live' = 'video';

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
      <Player {type} />
    {/await}
  {/if}
</div>
