<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="35%"
  height="35%"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <g fill="none" stroke="currentColor" stroke-width="0.6">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    {#if $shouldDraw}
      <path d="M14 2v6h6m-4 5H8m8 4H8m2-8H8" transition:draw={{ duration: 800 }} />
    {:else}
      <path d="M14 2v6h6m-4 5H8m8 4H8m2-8H8" />
    {/if}
  </g>
</svg>
