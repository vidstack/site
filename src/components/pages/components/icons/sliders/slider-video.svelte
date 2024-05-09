<script lang="ts">
  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';
  import Slider from './slider.svelte';

  export let animate: boolean;

  const shouldDraw = useShouldDraw(animate);
</script>

<Slider {animate} noPreviewBorder>
  <svg width="24" height="24" viewBox="0 0 24 24" slot="preview" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      {#if $shouldDraw}
        <path d="m22 8l-6 4l6 4V8Z" transition:draw={{ duration: 400 }} />
      {:else}
        <path d="m22 8l-6 4l6 4V8Z" />
      {/if}
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </g>
  </svg>
</Slider>
