<script lang="ts">
  import clsx from 'clsx';

  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher<{
    end: void;
  }>();

  export let text: string;
  export let speed = 50;
  export let delay = 0;
  export let caret = false;

  let _class = '';
  export { _class as class };

  let typedText = '',
    charIndex = 0,
    mounted = false,
    timerId = -1;

  onMount(() => {
    mounted = true;
  });

  function type(text: string) {
    if (charIndex >= text.length) {
      dispatch('end');
      return;
    }

    typedText += text.charAt(charIndex);
    charIndex++;
    timerId = window.setTimeout(() => type(text), speed);
  }

  function onTextChange(text: string) {
    typedText = '';
    window.clearTimeout(timerId);
    timerId = window.setTimeout(
      () => {
        type(text);
      },
      delay + (caret ? 800 : 0),
    );
  }

  $: if (mounted) {
    onTextChange(text);
  }

  $: typing = typedText.length > 0 && typedText.length !== text.length;
  $: ended = typedText.length === text.length;
</script>

<span class={clsx('', _class)} aria-live="polite">
  {#if typedText}
    {typedText}
  {:else}
    <span class="opacity-0" aria-hidden="true">X</span>
  {/if}
  {#if caret && !ended}
    <div
      class={clsx(
        'inline-block h-[0.9em] w-2 translate-y-[0.1em] bg-soft transition-opacity',
        !typedText ? '-translate-x-[1em]' : '-translate-x-[0.1em]',
        typing ? 'opacity-80' : 'animate-pulse opacity-20',
      )}
    ></div>
  {/if}
</span>
