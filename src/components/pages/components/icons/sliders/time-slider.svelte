<script lang="ts">
  import Slider from './slider.svelte';

  export let animate: boolean;
</script>

<div class="flex w-full items-center justify-center">
  <span class="mr-2 font-mono text-[10px]">0:30</span>
  <Slider {animate} />
  <span class="ml-2 font-mono text-[10px]">10:30</span>
</div>
