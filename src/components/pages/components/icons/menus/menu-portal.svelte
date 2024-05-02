<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<svg width="42%" height="42%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="0.6">
    {#if $shouldDraw}
      <path d="M6 10V5c0-1.7 1.3-3 3-3h1" transition:draw={{ duration: 600 }} />
    {:else}
      <path d="M6 10V5c0-1.7 1.3-3 3-3h1" />
    {/if}
    <path
      d="M14 4c0-1.1.9-2 2-2m4 0c1.1 0 2 .9 2 2m0 4c0 1.1-.9 2-2 2m-4 0c-1.1 0-2-.9-2-2M3 7l3 3l3-3"
    />
    <rect width="8" height="8" x="2" y="14" rx="2" />
  </g>
</svg>
