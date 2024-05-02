<script lang="ts">
  import Slider from './slider.svelte';

  export let animate: boolean;
</script>

<Slider {animate}>
  <span slot="preview">50%</span>
</Slider>
