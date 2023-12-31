<script lang="ts">
  import clsx from 'clsx';

  import CheckIcon from '~icons/lucide/check';
  import CopyIcon from '~icons/lucide/copy';

  import { onMount } from 'svelte';

  import { decodeHTML } from '../../utils/html';
  import { isKeyboardPress } from '../../utils/keyboard';
  import { isHighlightLine, resolveHighlightedLines } from './highlight';
  import { getLoadedCodeSnippet } from './registry';

  export let id: string;
  export let highlights = '';
  export let transform: (code: string) => string = (s) => s;

  let _class = '';
  export { _class as class };

  let copied = false,
    loading = true;

  onMount(() => {
    const intervalId = window.setInterval(() => {
      if (getLoadedCodeSnippet(id)) {
        loading = false;
        window.clearInterval(intervalId);
        return;
      }
    }, 100);
  });

  async function onCopy() {
    try {
      const snippet = getLoadedCodeSnippet(id),
        source = transform(snippet?.source || ''),
        highlightedLines =
          highlights && resolveHighlightedLines(source.split(/\n/g).length, highlights),
        decoded = decodeHTML(source),
        filtered = highlightedLines
          ? decoded
              .split('\n')
              .filter((line, i) => isHighlightLine(highlightedLines, i + 1))
              .join('\n')
          : decoded;

      await navigator.clipboard.writeText(filtered.replace(/>;$/, '>'));
    } catch (e) {
      // no-op
    }

    copied = true;
  }

  $: if (copied) {
    setTimeout(() => {
      copied = false;
    }, 600);
  }
</script>

<button
  type="button"
  class={clsx(
    'border rounded-sm px-2 py-1 flex items-center justify-center',
    'transition-opacity duration-300',
    copied
      ? clsx(
          'text-green-600 bg-green-600/20 border-green-600/10',
          'dark:text-green-400 dark:bg-green-400/20 dark:border-green-600/10',
        )
      : 'text-brand bg-brand/20 border-brand/10 hocus:border-brand/90',
    loading ? 'opacity-0' : 'opacity-100',
    _class,
  )}
  on:pointerup={onCopy}
  on:keydown={(e) => isKeyboardPress(e) && onCopy()}
>
  {#if copied}
    <CheckIcon class="w-4 h-4" />
  {:else}
    <CopyIcon class="w-4 h-4" />
  {/if}

  <span class="sr-only">Copy</span>
</button>
