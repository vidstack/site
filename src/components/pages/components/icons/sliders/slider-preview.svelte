<script lang="ts">
  import Slider from './slider.svelte';

  export let animate: boolean;
</script>

<Slider {animate}>
  <span slot="preview">
    <span class="text-transparent">XX</span>
  </span>
</Slider>
