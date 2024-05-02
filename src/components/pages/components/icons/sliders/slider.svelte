<script lang="ts">
  import clsx from 'clsx';

  export let animate: boolean;
  export let chapters = false;
  export let noPreviewBorder = false;
</script>

<div class="relative flex h-4 w-40 items-center justify-center">
  {#if chapters}
    {#each [25, 35, 10, 30] as width}
      <div
        class={clsx('ml-0.5 h-[3px]', animate ? 'bg-inverse' : 'bg-soft/80')}
        style={`width: ${width}%`}
      ></div>
    {/each}
  {:else}
    <div class={clsx('h-px w-full', animate ? 'bg-inverse' : 'bg-soft/80')}></div>
  {/if}

  <div
    class="thumb absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-soft"
    class:animate
  ></div>
  {#if $$slots.preview}
    <div
      class={clsx(
        'absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 rounded-sm px-1.5 py-px font-mono text-[10px]',
        animate ? 'border-inverse text-inverse' : 'border-soft/80',
        animate && 'animate',
        !noPreviewBorder && 'border',
      )}
    >
      <slot name="preview" />
    </div>
  {/if}
</div>

<style>
  .animate {
    animation: slide 1.5s;
  }

  .thumb.animate {
    background-color: rgb(var(--color-inverse));
    box-shadow: 0 0 0 4px rgb(var(--color-inverse) / 0.4);
  }

  @keyframes slide {
    33% {
      left: 32%;
    }
    66% {
      left: 68%;
    }
    100% {
      left: 50%;
    }
  }
</style>
