<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<svg width="30%" height="30%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class:animate>
  <g fill="none" stroke="currentColor" stroke-width="0.6">
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
    {#if $shouldDraw}
      <path d="m12 15l5 6H7l5-6z" transition:draw={{ duration: 400 }} />
    {:else}
      <path d="m12 15l5 6H7l5-6z" />
    {/if}
  </g>
</svg>
