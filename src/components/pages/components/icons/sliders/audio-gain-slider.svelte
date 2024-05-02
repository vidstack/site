<script lang="ts">
  import Slider from './slider-steps.svelte';

  export let animate: boolean;
</script>

<div class="flex w-full items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="1.5" d="M11 5L6 9H2v6h4l5 4V5z" />
  </svg>

  <Slider {animate} />

  <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      d="M11 5L6 9H2v6h4l5 4V5zm4.54 3.46a5 5 0 0 1 0 7.07m3.53-10.6a10 10 0 0 1 0 14.14"
    />
  </svg>
</div>
