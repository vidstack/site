<script lang="ts">
  import Slider from './slider-steps.svelte';

  export let animate: boolean;
</script>

<div class="flex w-full items-center justify-center" class:animate>
  <span class="mr-2 font-mono text-[10px]">SD</span>

  <Slider {animate} />

  <span class="ml-2 font-mono text-[10px]">UHD</span>
</div>
