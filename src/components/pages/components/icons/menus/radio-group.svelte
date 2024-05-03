<script lang="ts">
  import clsx from 'clsx';

  import { draw } from 'svelte/transition';

  import { useShouldDraw } from '../../shared';

  export let animate: boolean;

  export let items: { name: string; checked?: boolean; badge?: string }[] = [
    { name: 'Option 1' },
    { name: 'Option 2', checked: true },
    { name: 'Option 3' },
  ];

  const shouldDraw = useShouldDraw(animate);
</script>

<div class="flex max-w-[200px] flex-1 flex-col items-center justify-center space-y-1.5">
  {#each items as item}
    <div
      class="flex w-full items-center rounded-md border border-soft/20 bg-elevate px-1 py-1 dark:border-soft/40"
    >
      {#if item.checked}
        <svg
          class="ml-0.5 mr-1.5"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="2">
            {#if $shouldDraw}
              <path d="M20 6L9 17l-5-5" transition:draw={{ duration: 400 }} />
            {:else}
              <path d="M20 6L9 17l-5-5" />
            {/if}
          </g>
        </svg>
      {:else}
        <span class="ml-0.5 mr-1.5 h-4 w-4"></span>
      {/if}
      <span class="font-mono text-xs">{item.name}</span>
      {#if item.badge}
        <div class="flex-1"></div>
        <span
          class={clsx(
            'mr-1 rounded-sm bg-elevate px-1 py-px text-[6px]',
            animate ? 'bg-inverse/10' : 'bg-soft/20',
          )}>{item.badge}</span
        >
      {/if}
    </div>
  {/each}
</div>
