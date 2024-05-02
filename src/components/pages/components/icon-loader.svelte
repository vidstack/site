<script lang="ts">
  import { active } from '~/actions/active';
  import { visible } from '~/actions/visible';
  import { tick } from 'svelte';

  export let id: string;

  let isAnimated = false,
    isVisible = false;

  const icons: any = import.meta.glob('./icons/**/*.svelte');

  $: iconId = id.replace('player/components/', '').replace('.mdx', '');

  $: importId = `./icons/${iconId}.svelte`;

  $: loader = icons[importId] ?? (() => ({ default: null }));
</script>

<div
  class="relative flex h-full w-full items-center justify-center"
  use:visible={{
    onChange(visible) {
      isVisible = visible;
    },
  }}
  use:active={isVisible
    ? (active) => {
        isAnimated = active;
        tick();
      }
    : null}
>
  {#if isVisible}
    {#await loader() then { default: Component }}
      {#key isAnimated}
        <svelte:component this={Component} animate={isAnimated} />
      {/key}
    {/await}
  {/if}
</div>
