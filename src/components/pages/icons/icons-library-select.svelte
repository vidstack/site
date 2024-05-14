<script lang="ts">
  import { updateSearchParams } from '~/utils/history';
  import { get } from 'svelte/store';

  import { IS_BROWSER } from '../../../utils/env';
  import Select from '../../select.svelte';
  import { currentIconLibrary, iconLibraryOptions, type IconLibrary } from './shared';

  if (IS_BROWSER) {
    updateURL(get(currentIconLibrary));
  }

  function onChange({ detail: [value] }: CustomEvent<string[]>) {
    updateURL(value);
  }

  function updateURL(value: string) {
    currentIconLibrary.set(value as IconLibrary);
    updateSearchParams({ lib: value });
  }
</script>

<Select
  class="min-w-[120px]"
  label="Preferred SVG Library"
  options={iconLibraryOptions}
  defaultValue={$currentIconLibrary}
  on:change={onChange}
/>
