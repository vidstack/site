<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { getBundlerConfigFileName, selections } from '../selection/selection-stores';

  const { bundler } = selections;

  $: id = `docs/player/getting-started/installation/bundler/${$bundler}`;
  $: title = getBundlerConfigFileName($bundler);
</script>

{#if $bundler === 'none'}
  <p>You can skip this step since you're not using a bundler.</p>
{:else}
  <CodeSnippet {id} {title} copy />
{/if}
