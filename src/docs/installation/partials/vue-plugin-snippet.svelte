<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { getBundlerConfigFileName, selections } from '../selection/selection-stores';

  const { bundler } = selections;

  $: id = `docs/player/getting-started/installation/vue/config/${$bundler}`;
  $: title = $bundler === 'none' ? 'main.ts' : getBundlerConfigFileName($bundler);
</script>

<CodeSnippet {id} {title} copy />
