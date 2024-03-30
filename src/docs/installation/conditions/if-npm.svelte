<script lang="ts">
  import { selections } from '../selection/selection-stores';

  const { install } = selections;
</script>

{#if $install === 'npm'}
  <slot />
{/if}
