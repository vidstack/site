<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<svg width="30%" height="30%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class:animate>
  <g fill="none" stroke="currentColor" stroke-width="0.6">
    {#if $shouldDraw}
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-8-7H7m10 4H7"
        transition:draw={{ duration: 800 }}
      />
    {:else}
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-8-7H7m10 4H7" />
    {/if}
  </g>
</svg>

<style>
  .animate {
    animation: popup 400ms ease-in;
  }

  @keyframes popup {
    0% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
