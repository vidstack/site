<script lang="ts">
  import { selections } from '../selection/selection-stores';

  const { css } = selections;

  export let name: 'default-layout' | 'plyr-layout' | null = null;
</script>

{#if name ? $css === name : $css === 'default-layout' || $css === 'plyr-layout'}
  <slot />
{/if}
