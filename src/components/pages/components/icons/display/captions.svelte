<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="50%"
  height="50%"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <g fill="none" stroke="currentColor" stroke-width="0.4">
    {#if $shouldDraw}
      <path transition:draw={{ duration: 500 }} d="M7 15h4m4 0h2M7 11h2m4 0h4" />
    {:else}
      <path d="M7 15h4m4 0h2M7 11h2m4 0h4" />
    {/if}
    <rect width="18" height="14" x="3" y="5" rx="1" ry="1" />
  </g>
</svg>
