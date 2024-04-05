<script lang="ts">
  import clsx from 'clsx';

  import CheckCircleIcon from '~astro-icons/lucide/check-circle-2';

  import { onMount } from 'svelte';

  import { visible } from '../../actions/visible';
  import { useARIATabs } from '../../aria/tabs';
  import { IS_BROWSER } from '../../utils/env';
  import { DisposalBin, listenEvent } from '../../utils/events';
  import ProgressCircle from '../progress-circle.svelte';

  export let label: string;
  export let steps: string[] = [];
  export let animated = false;
  export let progress = false;
  export let initialDelay = 0;

  let _class = '';
  export { _class as class };
  export let stepListClass = '';

  let content: HTMLElement,
    started = false,
    startAnimationTimer = -1,
    animationInterval = -1,
    progressPercent = 0,
    isVisible = false;

  onMount(() => {
    const scrollContainers = content.querySelectorAll('.scrollbar'),
      disposal = new DisposalBin();

    for (const container of scrollContainers) {
      disposal.add(listenEvent(container, 'scroll', onReset));
    }

    return () => disposal.dispose();
  });

  const {
    tabsRoot: stepsRoot,
    tabList: stepList,
    tab: step,
    selectedTab: selectedStep,
    selectTab: selectStep,
  } = useARIATabs({
    onSelect(step, trigger) {
      onPause();
      progressPercent = 0;
      if (step < steps.length) {
        startAnimationTimer = window.setTimeout(onPlay, trigger ? 30000 : 5000);
      }
    },
  });

  function onPlay() {
    setTimeout(
      () => {
        window.clearInterval(animationInterval);
        animationInterval = window.setInterval(() => {
          progressPercent += 2.5;
          if (progressPercent >= 100) {
            window.clearInterval(animationInterval);
            const nextStep = $selectedStep + 1;
            if (nextStep < steps.length) {
              progressPercent = 0;
              selectStep(nextStep);
            }
          }
        }, 100);
      },
      !started ? initialDelay : 0,
    );
    started = true;
  }

  function onPause() {
    window.clearInterval(animationInterval);
    window.clearTimeout(startAnimationTimer);
  }

  let resetTimerId = -1;
  function onReset() {
    onPause();
    window.clearTimeout(resetTimerId);
    resetTimerId = window.setTimeout(() => {
      resetTimerId = -1;
      onPlay();
    }, 800);
  }

  $: if (IS_BROWSER && animated) {
    if (isVisible) onPlay();
    else onPause();
  }
</script>

<div
  class={clsx('flex flex-col items-center', _class)}
  use:stepsRoot
  use:visible={{
    onChange(visible) {
      isVisible = visible;
    },
  }}
>
  <div class={clsx('relative flex w-full items-center', stepListClass)} use:stepList={label}>
    {#each steps as title, i}
      {@const isSelected = $selectedStep === i}
      {@const isComplete = $selectedStep > i || progressPercent >= 100}
      <button
        class={clsx(
          'group flex items-center justify-center px-2 py-1.5 text-[15px] font-semibold outline-none',
        )}
        use:step
      >
        {#if progress}
          {#if isComplete}
            <CheckCircleIcon
              class={clsx('mr-2 h-[26px] w-[26px]', 'text-brand group-hocus:text-brand/80')}
            />
          {:else}
            <div class="relative mr-2 flex h-[26px] w-[26px] items-center justify-center">
              <ProgressCircle
                class="absolute left-0 top-0 shadow-sm"
                size={26}
                thickness={isSelected ? 20 : 18}
                percent={isComplete ? 100 : $selectedStep === i ? progressPercent : 0}
                trackClass={clsx('opacity-25')}
                fillClass="text-brand"
              />
              <span
                class={clsx(
                  'mt-px text-xs font-semibold transition-colors duration-300',
                  !isSelected && 'text-inverse/40 group-hocus:text-inverse',
                )}>{i + 1}</span
              >
            </div>
          {/if}
        {:else}
          <div
            class={clsx(
              'mr-1.5 flex h-[19px] w-[19px] items-center justify-center rounded-full text-xs',
              'font-bold shadow-sm transition-colors duration-300',
              isSelected
                ? 'bg-brand text-white dark:text-black'
                : 'bg-brand/20 text-inverse/40 group-hocus:text-inverse',
            )}
          >
            {i + 1}
          </div>
        {/if}

        <span
          class={clsx(
            'transition-colors group-hocus:text-inverse',
            !isSelected && !isComplete && 'text-inverse/60 group-hocus:text-inverse',
            isComplete && 'text-inverse',
          )}
        >
          {title}
        </span>
      </button>

      {#if i < steps.length - 1}
        <div class="flex-1">
          <div
            class={clsx(
              'border-t-2 border-dashed border-border/90 transition-[width] duration-500',
              $selectedStep > i ? 'w-full' : 'w-0',
            )}
          />
        </div>
      {/if}
    {/each}
  </div>

  <div class={clsx('mt-8 w-full')} bind:this={content}>
    <slot />
  </div>
</div>
