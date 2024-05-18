<script lang="ts">
  import clsx from 'clsx';

  import { onMount } from 'svelte';

  let cursor = 12,
    total = 0,
    batch = 6,
    root: HTMLElement;

  onMount(() => {
    const items = getItems();

    total = items.length;

    for (let i = cursor; i < items.length; i++) {
      items[i].style.display = 'none';
    }
  });

  function getItems() {
    return root.querySelectorAll<HTMLElement>('[data-grid-item]');
  }

  function onShowMore() {
    const items = getItems();

    for (let i = cursor; i < cursor + batch; i++) {
      const item = items[i];
      if (item) item.style.display = 'flex';
    }

    cursor += batch;
  }

  $: remaining = Math.max(0, total - cursor);
</script>

<div class="relative flex h-full w-full flex-col justify-center" bind:this={root}>
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
        Show More ({remaining})
      </button>
    </div>
  {/if}
</div>
