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
    'code-block relative text-sm leading-[var(--leading)] flex flex-col min-h-0 bg-elevate',
    !flat
      ? 'shadow-sm rounded-md border-border/90 border 576:max-h-[32rem] max-h-[60vh] mx-auto'
      : 'w-full min-h-full max-h-[calc(var(--code-block-max-h,0px)-var(--code-block-gutters,0px))]',
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
    <div class="sticky top-0 z-10 flex items-center shrink-0 py-2.5 px-2 mb-1.5">
      {#if title}
        <span class="font-mono text-sm text-soft ml-1">{title}</span>
      {/if}
      <slot name="top-bar" />
    </div>
  {/if}

  <div
    class={clsx(
      'flex scrollbar scrollbar-square overflow-auto flex-1',
      !flat && (title || showTopBar ? 'px-2 pb-2.5' : 'p-4'),
      flat && indent && 'px-4',
    )}
  >
    <slot />
  </div>
</div>

<style>
  .code-block :global(pre code[data-lang-bash] .line:not(:empty)::before) {
    content: '> ';
    font-weight: bold;
    color: rgb(var(--color-brand));
  }
</style>
