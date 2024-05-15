<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import JsFrameworkSelect from '../js-framework-select.svelte';
  import { jsFramework } from '../shared';

  $: ext = $jsFramework === 'wc' ? 'html' : $jsFramework === 'react' ? 'tsx' : 'ts';
  $: id = `home/layout/player.${ext}`;
</script>

<div class="relative mx-auto flex w-full max-w-[680px] items-center justify-center">
  <CodeSnippet title={`player.${ext}`} {id}>
    <JsFrameworkSelect class="absolute right-2 top-2 z-50" js />
  </CodeSnippet>
</div>
