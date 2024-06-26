<script lang="ts">
  import clsx from 'clsx';

  import type { CodeSnippet, LazyCodeSnippet } from ':code_snippets';
  import { IS_BROWSER } from '~/utils/env';
  import { tick } from 'svelte';

  import { codeSnippets } from '../../stores/code-snippets';
  import IndeterminateLoadingSpinner from '../style/indeterminate-loading-spinner.svelte';
  import { isHighlightLine, resolveHighlightedLines } from './highlight';
  import { getLoadedCodeSnippet, registerCodeSnippet } from './registry';

  let root: HTMLElement;

  export let id: string;
  export let transform: (code: string) => string = (s) => s;
  export let highlights: string | undefined = undefined;

  let _class: string | undefined = undefined;
  export { _class as class };

  let code = '',
    snippet: CodeSnippet | undefined;

  async function loadSnippet(loader: LazyCodeSnippet) {
    if (!import.meta.env.DEV) {
      const loadedSnippet = getLoadedCodeSnippet(id);
      if (loadedSnippet) {
        snippet = loadedSnippet;
        return;
      }
    }

    const mod = await loader.loader();
    snippet = mod.default;

    registerCodeSnippet(id, snippet);
  }

  async function loadCode(snippet: CodeSnippet) {
    code = (await snippet.code.loader()).default;

    await tick();

    if (highlights) {
      const lines = root.querySelectorAll<HTMLElement>('.line'),
        highlightedLines = resolveHighlightedLines(lines.length, highlights);
      for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle('highlighted', isHighlightLine(highlightedLines, i + 1));
      }
    }
  }

  if (import.meta.hot) {
    import.meta.hot.on(':invalidate_code_snippet', async ({ id, ext, imports }) => {
      if (loader?.id !== baseId || (extName && extName !== ext)) return;

      if (snippet) {
        Object.assign(snippet.code, {
          loader: () => import(/* @vite-ignore */ imports.code.loader),
        });
      }

      snippet = (await import(/* @vite-ignore */ imports.snippet)).default;
    });
  }

  $: baseId = id.includes('.') ? id.split('.')[0] : id;
  $: extName = id.split('.')[1];
  $: loader = $codeSnippets.find(
    (snippet) => snippet.id === baseId && (!extName || extName === snippet.ext),
  );

  $: if (loader && IS_BROWSER) loadSnippet(loader);

  $: if (snippet && IS_BROWSER) loadCode(snippet);
</script>

{#if loader && !code}
  <pre class={clsx('code-display not-prose inline-flex min-h-full', _class)} bind:this={root}>
    <IndeterminateLoadingSpinner class="absolute right-4 top-2" />
    <code
      class="inline-block"
      style={`width: ${loader.width * 9.48}px; height: ${loader.lines * 22}px;`}></code>
</pre>
{:else}
  {@html transform(code)}
{/if}
