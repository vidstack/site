<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';
  import Callout from '~/docs/components/callout.svelte';

  import { getBundlerConfigFileName, selections } from '../selection/selection-stores';

  const { bundler } = selections;

  $: base = 'docs/player/getting-started/installation/bundler';
  $: id = `${base}/${$bundler}`;
  $: title = getBundlerConfigFileName($bundler);
  $: filterId = `${base}/filter-${$bundler === 'webpack' ? 'webpack' : 'vite'}`;
</script>

{#if $bundler === 'none'}
  <p>You can skip this step since you're not using a bundler.</p>
{:else}
  <CodeSnippet {id} {title} copy />
  <Callout type="tip">
    <p>
      It can slow down your builds parsing all files in a large project. Include a filter to check
      only certain files or directories depending on where you import the bundle:
    </p>
    <CodeSnippet id={filterId} />
  </Callout>
{/if}
