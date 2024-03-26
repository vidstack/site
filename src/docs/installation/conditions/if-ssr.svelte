<script lang="ts">
  import { selections } from '../selection/selection-stores';

  const { bundler } = selections;
</script>

{#if $bundler === 'astro' || $bundler === 'nuxt' || $bundler === 'sveltekit' || $bundler === 'solidstart'}
  <slot />
{/if}
