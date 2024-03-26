<script lang="ts">
  import { selections } from '../selection/selection-stores';

  const { css } = selections;
</script>

{#if $css !== 'default-layout' && $css !== 'plyr-layout'}
  <slot />
{/if}
