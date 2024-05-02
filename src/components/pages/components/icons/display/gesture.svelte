<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<svg
  width="30%"
  height="30%"
  viewBox="0 0 24 24"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="none" stroke="currentColor" stroke-width="0.8">
    <path d="m9 9l5 12l1.774-5.226L21 14L9 9zm7.071 7.071l4.243 4.243M7.188 2.239l.777" />
    {#if $shouldDraw}
      <path
        transition:draw={{ duration: 500 }}
        d="m9 9l5 12l1.774-5.226L21 14L9 9zm7.071 7.071l4.243 4.243M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
      />
    {/if}
  </g>
</svg>
