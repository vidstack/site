<script lang="ts">
  import { selections } from '../selection/selection-stores';

  const { provider } = selections;
</script>

{#if $provider === 'audio'}
  <p>You can skip this step since you're not playing video content.</p>
{:else}
  <slot />
{/if}
