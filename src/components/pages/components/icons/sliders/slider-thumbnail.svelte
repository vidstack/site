<script lang="ts">
  import Poster from '../display/poster.svelte';
  import Slider from './slider.svelte';

  export let animate: boolean;
</script>

<Slider {animate} noPreviewBorder>
  <Poster size="28" {animate} slot="preview" />
</Slider>
