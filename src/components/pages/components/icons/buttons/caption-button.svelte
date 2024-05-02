<script lang="ts">
  import { onMount } from 'svelte';
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  let shouldDraw = useShouldDraw(animate),
    shouldDrawLine = false;

  onMount(() => {
    if (!animate) return;
    setTimeout(() => {
      shouldDrawLine = true;
    }, 200);
  });
</script>

<svg
  width="35%"
  height="35%"
  viewBox="0 0 24 24"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="none" stroke="currentColor" stroke-width="0.6">
    <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
    {#if $shouldDraw}
      <path transition:draw={{ duration: 400 }} d="M7 15h4m4 0h2M7 11h2m4 0h4" />
    {:else}
      <path d="M7 15h4m4 0h2M7 11h2m4 0h4" />
    {/if}
  </g>
</svg>

{#if shouldDrawLine}
  <div
    class="line absolute left-1/2 top-1/2 z-10 h-px w-[25%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-inverse"
  ></div>
{/if}

<style>
  .line {
    animation: scale 200ms;
  }

  @keyframes scale {
    0% {
      width: 0%;
    }
    100% {
      width: 25%;
    }
  }
</style>
