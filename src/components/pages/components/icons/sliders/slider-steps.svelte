<script lang="ts">
  import clsx from 'clsx';

  import Slider from './slider.svelte';

  export let animate: boolean;
</script>

<div class="relative">
  <Slider {animate} />

  <div class="absolute right-0 top-0 z-10 flex h-full w-full items-center justify-between">
    {#each [1, 2, 3, 4, 5, 6, 7] as i}
      <div class={clsx('h-2 w-px', animate ? 'bg-inverse' : 'bg-soft/80')}></div>
    {/each}
  </div>
</div>
