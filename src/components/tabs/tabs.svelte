<script lang="ts">
  import clsx from 'clsx';

  import { isString } from '~/utils/unit';
  import { createEventDispatcher } from 'svelte';

  import { useARIATabs } from '../../aria/tabs';

  export let label: string;
  export let tabs: Array<string | { label: string; Icon: any }> = [];
  export let block = false;
  export let justify: 'start' | 'center' | 'end' = 'start';

  const dispatch = createEventDispatcher();

  let container: HTMLElement;

  const { tabsRoot, tabList, tab, selectedTab, tabRefs } = useARIATabs();

  $: isReady = $tabRefs.length;
  $: selectedTabWidth = isReady ? $tabRefs[$selectedTab].offsetWidth + 'px' : 0;
  $: selectedTabLeft = isReady ? $tabRefs[$selectedTab].offsetLeft + 'px' : 0;
  $: containerWidth = container ? container.getBoundingClientRect().width : 0;
  $: dispatch('change', $selectedTab);
</script>

<div class="w-full" use:tabsRoot>
  <div
    class={clsx(
      'no-scrollbar relative items-center overflow-x-auto p-0.5 ',
      block ? 'flex w-full' : 'inline-flex',
    )}
    style={`justify-content: ${justify}`}
    use:tabList={label}
    bind:this={container}
  >
    {#each tabs as option}
      {@const data = !isString(option) ? option : null}
      <button
        class={clsx(
          'group mx-1 flex items-center justify-center px-6 py-2.5 text-[15px] font-semibold outline-none first:ml-0 last:mr-0',
          'z-10 rounded-sm border-b-2 border-transparent text-soft transition-colors duration-200',
          'aria-selected:text-inverse hocus:border-inverse/60 hocus:text-inverse/80',
        )}
        use:tab
      >
        {#if data?.Icon}
          <svelte:component this={data.Icon} class="mr-2" width={24} height={24} />
        {/if}
        {data?.label ?? option}
      </button>
    {/each}

    <div
      class={clsx('absolute left-0 top-[45px] z-0 h-0.5 w-full bg-inverse/10')}
      style={`right: ${block ? 0 : `${containerWidth}px`}`}
    ></div>

    <div
      class={clsx(
        'absolute left-0 top-[44px] h-0.5 transition-[left,opacity] duration-200 ease-out',
        'pointer-events-none z-20 bg-inverse',
        isReady ? 'opacity-100' : 'opacity-0',
      )}
      style={`width: ${selectedTabWidth}; left: ${selectedTabLeft};`}
    ></div>
  </div>

  <div
    class={clsx('scrollbar scrollbar-square mt-8 max-h-[680px] w-full overflow-auto')}
    style={`max-width: ${block ? 'none' : `${containerWidth}px`}`}
  >
    <slot />
  </div>
</div>
