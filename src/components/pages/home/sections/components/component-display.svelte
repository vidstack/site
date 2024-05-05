<script lang="ts">
  import GlyphText from '~/components/style/glyph-text.svelte';
  import { IS_BROWSER } from '~/utils/env';
  import { onDestroy, tick } from 'svelte';
  import { get } from 'svelte/store';

  import { useContext } from './component-display-group.svelte';

  export let category: string;
  export let items: { id: string; title: string }[];

  const ctx = useContext(),
    activeGroupIndex = ctx.index,
    groupLength = ctx.length;

  const groupIndex = get(groupLength);
  groupLength.update((n) => n + 1);

  let index = 0,
    rotate = false,
    animate = false,
    firstRun = true,
    icons: any = import.meta.glob('../../../components/icons/**/*.svelte');

  $: current = items[index];
  $: id = current.id;
  $: iconId = id.replace('player/components/', '').replace('.mdx', '');
  $: importId = `../../../components/icons/${iconId}.svelte`;
  $: loader = icons[importId] ?? (() => ({ default: null }));

  async function update() {
    const shouldRotate = !firstRun,
      isLastGroupItem = groupIndex === get(groupLength) - 1;

    if (shouldRotate) {
      rotate = true;
      animate = false;
      await tick();
      index = (index + 1) % items.length;
    } else {
      animate = true;
      firstRun = false;
    }

    window.setTimeout(
      () => {
        rotate = false;
        window.setTimeout(
          () => {
            animate = true;
          },
          shouldRotate ? 400 : 50,
        );
        window.setTimeout(
          () => {
            activeGroupIndex.update((n) => (n + 1) % $groupLength);
          },
          shouldRotate || isLastGroupItem ? 1300 : 500,
        );
      },
      shouldRotate ? 600 : 0,
    );
  }

  $: if (IS_BROWSER && groupIndex === $activeGroupIndex) {
    update();
  }

  onDestroy(() => {
    activeGroupIndex.set(0);
    groupLength.update((n) => n - 1);
  });
</script>

<div class="flex aspect-[4/3] w-1/2 flex-col p-2 768:max-w-[250px] 768:flex-1">
  <div
    class="card flex h-full w-full items-center justify-center rounded-sm border border-border/90 bg-elevate p-4 shadow-sm"
    class:rotate
  >
    {#await loader() then { default: Component }}
      {#key animate}
        <svelte:component this={Component} {animate} />
      {/key}
    {/await}
  </div>
  {#if current.title}
    <span class="mt-3 text-xs text-soft/90">{category}</span>
    <GlyphText
      class="mt-1 text-base font-semibold tracking-wide text-inverse"
      text={current.title}
      animate={rotate}
    />
  {/if}
</div>

<style>
  .card {
    transition:
      transform 0.6s,
      filter 0.2s ease;
    filter: blur(0);
  }

  .card.rotate {
    transform-style: preserve-3d;
    perspective: 1000px;
    transform: rotateY(180deg);
    filter: blur(1px);
  }
</style>
