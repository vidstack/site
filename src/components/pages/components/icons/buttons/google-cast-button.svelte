<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<svg width="30%" height="30%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class:animate>
  <g fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round">
    {#if $shouldDraw}
      <path
        d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 12a9 9 0 0 1 8 8m-8-4a5 5 0 0 1 4 4m-4 0h.01"
        transition:draw={{ duration: 500 }}
      />
    {:else}
      <path
        d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 12a9 9 0 0 1 8 8m-8-4a5 5 0 0 1 4 4m-4 0h.01"
      />
    {/if}
  </g>
</svg>
