<script lang="ts">
  import clsx from 'clsx';

  import { resize } from '~/actions/resize';
  import { onMount } from 'svelte';

  let cursor = 0,
    total = 0,
    cols = 6,
    root: HTMLElement;

  onMount(() => {
    total = getItems().length;

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  function getItems() {
    return root.querySelectorAll<HTMLElement>('[data-grid-item]');
  }

  function onShowMore() {
    if (cursor === 0) {
      cursor = cols * 3;
    }

    cursor += cols * 2;
  }

  function onResize() {
    const width = window.innerWidth;
    if (width < 576) {
      cols = 1;
    } else if (width >= 576 && width < 768) {
      cols = 2;
    } else {
      cols = 3;
    }
  }

  $: end = cursor === 0 ? cols * 3 : cursor;

  $: if (root) {
    const items = getItems();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item) {
        item.style.display = i < end ? 'flex' : 'none';
      }
    }
  }

  $: remaining = Math.max(0, total - cursor);
</script>

<div
  class="relative flex h-full w-full flex-col justify-center"
  bind:this={root}
  use:resize={{ onResize }}
>
  <slot />

  {#if remaining > 0}
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-body pb-8 pt-32"
    >
      <button
        class={clsx(
          'mx-auto mt-12 rounded-sm border border-border/90 bg-elevate px-4 py-2 text-sm',
          'font-semibold shadow-sm transition-transform duration-300 hocus:scale-105',
          'pointer-events-auto',
        )}
        on:pointerup={onShowMore}
      >
        Show More
      </button>
    </div>
  {/if}
</div>
