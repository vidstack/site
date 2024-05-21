<script lang="ts">
  import clsx from 'clsx';

  import SearchIcon from '~icons/lucide/search';

  import { onMount } from 'svelte';

  import { listenEvent } from '../utils/events';

  export let value = '';
  export let placeholder = '';
  export let shortcutKeys: string[] = ['/', 'meta+k'];

  let input: HTMLInputElement;

  onMount(() => {
    return listenEvent(document, 'keydown', (event) => {
      let isValid = false;

      for (const key of shortcutKeys) {
        const metaKey = !key.startsWith('meta') || event.metaKey;
        if (metaKey && event.key === key.replace('meta+', '')) {
          isValid = true;
          break;
        }
      }

      if (!isValid) return;

      event.stopPropagation();
      requestAnimationFrame(() => input.focus());
    });
  });

  $: shortcutKeyText = !shortcutKeys[0].includes('meta')
    ? '/'
    : `⌘ + ${shortcutKeys[0].replace('meta+', '')}`;
</script>

<div class="group relative w-full flex-auto">
  <SearchIcon
    class={clsx(
      'pointer-events-none absolute inset-y-0 left-1 h-full w-5 text-soft',
      '-mt-px transition-colors duration-200 group-focus-within:text-brand',
    )}
  />

  <input
    class={clsx(
      'font-base border-b-2 text-base placeholder:text-soft focus:border-brand',
      'pr-4.5 block w-full appearance-none border-border/90 p-2 pl-8 transition-colors duration-200',
    )}
    type="search"
    {placeholder}
    bind:value
    bind:this={input}
    style="background: none;box-shadow: none;"
    on:input
  />

  <div
    class={clsx(
      'border-border/90 bg-inverse px-2 py-px font-mono text-sm font-bold text-inverse',
      'absolute right-1 top-2 flex items-center justify-center rounded-sm shadow-sm',
    )}
  >
    {shortcutKeyText}
  </div>
</div>
