<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;
  export let size: string | number = '35%';

  const shouldDraw = useShouldDraw(animate);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <g
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="0.6"
  >
    {#if $shouldDraw}
      <circle transition:draw={{ duration: 300 }} cx="9" cy="9" r="2" />
      <path
        transition:draw={{ duration: 300, delay: 300 }}
        d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
      />
    {:else if !animate}
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    {/if}
    <rect width="18" height="18" x="3" y="3" rx="1" ry="1" />
  </g>
</svg>
