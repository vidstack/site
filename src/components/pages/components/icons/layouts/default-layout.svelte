<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<svg
  width="35%"
  height="35%"
  viewBox="0 0 24 24"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="none" stroke="currentColor" stroke-width="0.6">
    {#if $shouldDraw}
      <path transition:draw={{ duration: 300 }} d="m16 16l2 2l4-4" />
    {:else if !animate}
      <path d="m16 16l2 2l4-4" />
    {/if}
    <path
      d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M16.5 9.4L7.55 4.24"
    />
    <path d="M3.29 7L12 12l8.71-5M12 22V12" />
  </g>
</svg>
