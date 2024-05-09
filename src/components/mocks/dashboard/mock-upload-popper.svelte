<script lang="ts">
  import clsx from 'clsx';

  import CheckCircleIcon from '~astro-icons/lucide/check-circle-2';
  import ChevronDownIcon from '~astro-icons/lucide/chevron-down';

  import { listenEvent } from '~/utils/events';
  import { onDestroy, onMount, tick } from 'svelte';
  import { get } from 'svelte/store';

  import { visible } from '../../../actions/visible';
  import { ariaBool } from '../../../utils/aria';
  import { IS_BROWSER } from '../../../utils/env';
  import { isKeyboardPress } from '../../../utils/keyboard';
  import ProgressCircle from '../../progress-circle.svelte';
  import { mockEncodeProgress, mockVideoTitles, type MockEncodeProgress } from './mock-encode';

  let popper: HTMLElement,
    gridEl: HTMLElement,
    expanded = false,
    intervalId = -1,
    startEncoding: boolean[] = [],
    videoCount = mockVideoTitles.length;

  const positionPopper = () => {
    popper.style.transform = `translate3d(0px, ${gridEl.scrollTop - 24 + 'px'}, 0px)`;
  };

  onMount(() => {
    gridEl = popper.parentElement!.parentElement as HTMLElement;
    positionPopper();
    return listenEvent(gridEl, 'scroll', positionPopper);
  });

  onDestroy(() => IS_BROWSER && window.clearTimeout(intervalId));

  function onPress() {
    expanded = !expanded;
    requestAnimationFrame(positionPopper);
  }

  function onVisible() {
    setTimeout(() => {
      if (intervalId === -1) {
        intervalId = window.setInterval(onIntervalTick, 100);
      }
    }, 800);
  }

  function startEncodingTimer(index: number) {
    if (typeof startEncoding[index] !== 'undefined') return;
    startEncoding[index] = false;
    setTimeout(() => {
      startEncoding[index] = true;
    }, Math.random() * 1500);
  }

  function onIntervalTick() {
    if (Math.random() <= 0.1) return;

    const progress = get(mockEncodeProgress);

    for (let i = 0; i < videoCount; i++) {
      const increment = Math.random() * (i + 1 * 6),
        current = (progress[i] ??= { upload: 0, encode: 0 });
      if (current.upload < 100) {
        current.upload = Math.min(100, current.upload + increment);
      } else {
        startEncodingTimer(i);
        if (startEncoding[i]) {
          current.encode = Math.min(100, current.encode + increment);
        }
      }
    }

    mockEncodeProgress.set([...progress]);
    tick();

    let complete = true;
    for (let i = 0; i < videoCount; i++) {
      const current = progress[i],
        percent = i > 0 ? (current.upload + current.encode) / 2 : current.upload;
      if (percent < 100) {
        complete = false;
      } else {
        const el = document.getElementById(`mock-video-${i}`);
        el?.setAttribute('data-ready', '');
      }
    }

    if (complete) window.clearInterval(intervalId);
  }

  function calcTotalUploadPercent(progress: MockEncodeProgress[]) {
    let total = 0;
    for (let i = 0; i < progress.length; i++) total += progress[i].upload || 0;
    return Math.min(100, total / progress.length) || 0;
  }

  $: uploadProgressPercent = calcTotalUploadPercent($mockEncodeProgress);
  $: completedUploads = $mockEncodeProgress.filter((e) => e.upload === 100).length;
  $: isUploadComplete = uploadProgressPercent === 100;
</script>

<div
  class={clsx(
    'absolute bottom-0 right-5 z-20 flex min-w-[240px] flex-col rounded-sm shadow-md',
    'duration-400 opacity-0 transition-opacity ease-in data-[visible]:opacity-100',
  )}
  style="transition-delay: 500ms;"
  bind:this={popper}
  use:visible={{
    once: true,
    threshold: 0.5,
  }}
>
  <button
    id="mock-uploader"
    class={clsx(
      'flex flex-col border border-border/90 bg-elevate/90 text-xs backdrop-blur-md',
      'rounded-sm px-3 py-2',
      expanded && 'rounded-b-none',
    )}
    aria-expanded={ariaBool(expanded)}
    aria-controls="mock-uploader-items"
    aria-haspopup="listbox"
    aria-label="Active Uploads"
    use:visible={{
      once: true,
      threshold: 0.5,
      onChange(isVisible) {
        if (isVisible) onVisible();
      },
    }}
    on:pointerup={onPress}
    on:keydown={(e) => isKeyboardPress(e) && onPress()}
  >
    <div class="flex w-full items-center">
      {#if isUploadComplete}
        <CheckCircleIcon class="mr-1 h-4 w-4 text-green-600 dark:text-green-400" />
      {/if}

      <span>{isUploadComplete ? 'Uploaded' : 'Uploading'}</span>

      <span class="ml-1.5 text-soft">
        {#if !isUploadComplete}
          {Math.round(uploadProgressPercent)}% -
        {/if}
        {completedUploads}/{videoCount}
      </span>

      <div class="flex-1"></div>

      <ChevronDownIcon
        class={clsx('h-4 w-4 transition-transform duration-300', expanded && 'rotate-180')}
      />
    </div>

    <div
      class={clsx(
        'mt-2 h-1 w-full rounded-sm bg-green-600 transition-[width] duration-300 dark:bg-green-400',
        uploadProgressPercent === 0 && 'hidden',
      )}
      style={`width: ${uploadProgressPercent}%;`}
    />
  </button>

  <div
    id="mock-uploader-items"
    class={clsx(
      'border-t-0 bg-elevate/90 backdrop-blur-md transition-[height,opacity]',
      'overflow-hidden rounded-b-sm duration-300',
      expanded ? 'h-[190px] border border-border/90 px-3 py-4 ease-in' : 'h-0 ease-out',
    )}
    aria-describedby="mock-uploader"
    aria-hidden={!ariaBool(expanded)}
  >
    <div class="flex w-full flex-col space-y-3">
      {#each mockVideoTitles as title, i (title)}
        {@const percent = $mockEncodeProgress[i]?.upload || 0}
        <div class="flex flex-row items-center">
          {#if percent === 100}
            <CheckCircleIcon class="mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
          {:else}
            <ProgressCircle
              class="mr-2"
              size={16}
              {percent}
              trackClass="text-inverse opacity-25"
              fillClass="text-green-600 dark:text-green-400 opacity-75"
            />
          {/if}
          <span class="text-xs font-semibold">{title} </span>
          <div class="flex-1"></div>
          <span class="ml-1 text-xs text-soft">{Math.round(percent)}%</span>
        </div>
      {/each}
    </div>
  </div>
</div>
