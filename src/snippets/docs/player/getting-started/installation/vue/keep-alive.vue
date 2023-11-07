<script setup lang="ts">
import type { MediaPlayerElement } from 'vidstack/elements';
import { onBeforeUnmount, ref } from 'vue';

const player = ref<MediaPlayerElement>(null);

onBeforeUnmount(() => {
  // This call will destroy the player and all child instances.
  // @hl-start
  player.value.destroy();
  // @hl-end
});
</script>

<template>
  <!-- `keep-alive` is forwarded to all child components. -->
  <!-- @hl-start -->
  <media-player keep-alive ref="player">
    <!-- @hl-end -->
    <!-- ... -->
  </media-player>
</template>
