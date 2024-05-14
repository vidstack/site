<script lang="ts">
  import { updateSearchParams } from '~/utils/history';
  import { get } from 'svelte/store';

  import { IS_BROWSER } from '../../../utils/env';
  import Select from '../../select.svelte';
  import {
    componentLibraryOptions,
    currentComponentLibrary,
    type ComponentLibrary,
  } from './shared';

  if (IS_BROWSER) {
    updateURL(get(currentComponentLibrary));
  }

  function onChange({ detail: [value] }: CustomEvent<string[]>) {
    updateURL(value);
  }

  function updateURL(value: string) {
    currentComponentLibrary.set(value as ComponentLibrary);
    updateSearchParams({
      lib: value,
    });
  }
</script>

<Select
  class="min-w-[120px]"
  label="Preferred Framework"
  options={componentLibraryOptions}
  defaultValue={$currentComponentLibrary}
  on:change={onChange}
/>
