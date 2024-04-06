<script lang="ts">
  import clsx from 'clsx';

  let _class = '';
  export { _class as class };

  export let title = '';
  export let flat = false;
  export let style = '';
  export let copy = false;
  export let showTopBar = false;
  export let indent = false;

  const hasTopBar = title || showTopBar;
</script>

<div
  {...$$restProps}
  class={clsx(
    'code-block relative flex min-h-0 flex-col bg-elevate text-sm leading-[var(--leading)]',
    !flat
      ? 'mx-auto max-h-[60vh] rounded-md border border-border/90 shadow-sm 576:max-h-[32rem]'
      : 'max-h-[calc(var(--code-block-max-h,0px)-var(--code-block-gutters,0px))] min-h-full w-full',
    _class,
  )}
  style={clsx(
    `--leading: 1.375rem;`,
    `--code-block-top: ${hasTopBar ? (copy ? 3.25 : 2.85) : 1}rem;`,
    style,
  )}
  data-flat={flat ? '' : null}
>
  {#if hasTopBar}
    <div class="sticky top-0 z-10 mb-1.5 flex shrink-0 items-center px-2 py-2.5">
      {#if title}
        <span class="ml-1 font-mono text-sm text-soft">{title}</span>
      {/if}
      <slot name="top-bar" />
    </div>
  {/if}

  <div
    class={clsx(
      'scrollbar scrollbar-square flex flex-1 overflow-auto',
      !flat && (title || showTopBar ? 'px-2 pb-2.5' : 'p-4'),
      flat && indent && 'px-4',
    )}
  >
    <slot />
  </div>
</div>

<style>
  .code-block :global(pre[data-lang='bash'] .line:not(:empty)::before) {
    content: '> ';
    font-weight: bold;
    color: rgb(var(--color-brand));
  }
</style>
