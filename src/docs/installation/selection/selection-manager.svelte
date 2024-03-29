<script lang="ts">
  import { currentJSLibrary, type JSLibrary } from '~/stores/libraries';
  import { DisposalBin, onPress } from '~/utils/events';
  import { onMount } from 'svelte';
  import { get, type Writable } from 'svelte/store';

  import { selections, type JSSelection } from './selection-stores';

  let root: HTMLElement,
    prevOption: HTMLElement | null = null;

  export let store: keyof typeof selections;
  export let param: string | undefined;

  onMount(() => {
    const _store = selections[store] as Writable<string>;

    setTimeout(() => {
      const options = root.querySelectorAll<HTMLElement>('[data-option]'),
        url = new URL(location.href),
        disposal = new DisposalBin();

      for (const option of options) {
        const value = option.getAttribute('data-value');
        if (!value) continue;

        if (param) {
          const isActive = url.searchParams.get(param!) === value || get(_store) === value;
          if (isActive) {
            updateParam(option);
            _store.set(value);
          }
        }

        disposal.add(
          onPress(option, () => {
            if (param) updateParam(option);
            _store.set(value);
          }),
        );
      }

      return () => disposal.dispose();
    }, 50);
  });

  function updateParam(el: HTMLElement) {
    if (!param || prevOption === el) return;

    const url = new URL(location.href),
      value = el.getAttribute('data-value')!;

    el.setAttribute('data-active', '');
    prevOption?.removeAttribute('data-active');

    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);

    prevOption = el;
  }

  function onJSLibChange(lib: JSLibrary) {
    const options = root.querySelectorAll<HTMLElement>('[data-option]');
    for (const option of options) {
      const optionLib = option.getAttribute('data-js-lib');
      if (optionLib) {
        option.style.display = optionLib !== lib ? 'none' : '';
      }
    }
  }

  function onFrameworkChange(framework: JSSelection) {
    const options = root.querySelectorAll<HTMLElement>('[data-framework]');
    for (const option of options) {
      const requiredFramework = option.getAttribute('data-framework');
      option.parentElement!.style.display = requiredFramework !== framework ? 'none' : '';
    }
  }

  $: if (root) onJSLibChange($currentJSLibrary);

  const { js } = selections;
  $: if (root) onFrameworkChange($js);
</script>

<div class="contents" bind:this={root}>
  <slot />
</div>
