<script lang="ts">
  import { selections } from '../selection/selection-stores';

  const { css } = selections;

  export let noMessage = false;
</script>

{#if $css === 'default-layout'}
  {#if !noMessage}
    <p>You can skip this step since you're using the Default Layout.</p>
  {/if}
{:else}
  <slot />
{/if}
