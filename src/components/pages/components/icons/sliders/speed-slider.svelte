<script lang="ts">
  import Slider from './slider-steps.svelte';

  export let animate: boolean;
</script>

<div class="flex w-full items-center justify-center" class:animate>
  <svg class="mr-2" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      d="m11 19l-9-7l9-7v14zm11 0l-9-7l9-7v14z"
    />
  </svg>

  <Slider {animate} />

  <svg class="ml-2" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      d="m13 19l9-7l-9-7v14zM2 19l9-7l-9-7v14z"
    />
  </svg>
</div>
