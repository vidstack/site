<script lang="ts">
  import Poster from './poster.svelte';

  export let animate: boolean;
</script>

<div class="flex flex-col">
  <div class="flex items-center justify-center">
    <Poster size="15%" {animate} />
    <Poster size="15%" {animate} />
    <Poster size="15%" {animate} />
    <Poster size="15%" {animate} />
  </div>
  <div class="flex items-center justify-center">
    <Poster size="15%" {animate} />
    <Poster size="15%" {animate} />
    <Poster size="15%" {animate} />
    <Poster size="15%" {animate} />
  </div>
</div>
