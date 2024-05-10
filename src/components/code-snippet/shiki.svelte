<script lang="ts">
  import type { BundledLanguage, HighlighterCore } from 'shiki';

  import IndeterminateLoadingSpinner from '../style/indeterminate-loading-spinner.svelte';
  import CodeBlockWrapper from './code-block-wrapper.svelte';

  export let code: string;
  export let lang: 'tsx' | 'html';

  let highlighter: HighlighterCore,
    highlightedCode = '',
    loading = true;

  async function getHighlighter() {
    if (highlighter) return highlighter;

    highlighter = await (
      await import('shiki/core')
    ).getHighlighterCore({
      loadWasm: import('shiki/wasm'),
      themes: [import('shiki/themes/github-light.mjs'), import('shiki/themes/github-dark.mjs')],
      langs: [import('shiki/langs/tsx.mjs'), import('shiki/langs/html.mjs')],
    });

    return highlighter;
  }

  async function highlight(code: string, lang: BundledLanguage) {
    try {
      loading = true;

      const highlighter = await getHighlighter();

      highlightedCode = await highlighter.codeToHtml(code, {
        lang,
        themes: { light: 'github-light', dark: 'github-dark' },
        transformers: [
          {
            name: 'pre',
            pre(node: any) {
              node.properties.class += ' code-display not-prose min-h-full';
              node.properties['data-lang'] = lang;
              if (typeof node.properties.style === 'string') {
                node.properties.style = node.properties.style
                  .replace(/background-color:.*?;/, '')
                  .replace(/--shiki-dark.*?;?$/, '');

                if (!node.properties.style) {
                  delete node.properties.style;
                }
              }
            },
            span(node: any) {
              if (typeof node.properties.style === 'string') {
                node.properties.style = node.properties.style.replace(/background-color:.*?;/, '');
              }
            },
          },
        ],
      });
    } finally {
      loading = false;
    }
  }

  $: lines = code.split('\n');
  $: width = Math.max(...lines.map((line) => line.length));
  $: highlight(code, lang);
</script>

<CodeBlockWrapper>
  {#if loading}
    <pre class="code-display not-prose inline-flex min-h-full">
    <IndeterminateLoadingSpinner class="absolute right-4 top-2" />
    <code class="inline-block" style={`width: ${width * 9.48}px; height: ${lines.length * 22}px;`}
      ></code>
    </pre>
  {:else}
    {@html highlightedCode}
  {/if}
</CodeBlockWrapper>
