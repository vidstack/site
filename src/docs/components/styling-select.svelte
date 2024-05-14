<script lang="ts">
  import Select, { type Option } from '~/components/select.svelte';
  import { cssLibraries, currentCSSLibrary, type CSSLibrary } from '~/stores/libraries';
  import { updateSearchParams } from '~/utils/history';
  import { kebabToTitleCase } from '~/utils/string';

  const options: Option[] = [
    ...cssLibraries.map((value) => ({
      label: kebabToTitleCase(value.replace('-css', '').replace('css', 'CSS')),
      value,
    })),
  ];

  function onChange({ detail: [cssLib] }: CustomEvent<string[]>) {
    if ($currentCSSLibrary === cssLib) return;
    $currentCSSLibrary = cssLib as CSSLibrary;
    updateSearchParams({ styling: cssLib });
  }
</script>

<Select
  class="ml-1 px-4 py-1 text-xs"
  label="Styling Preference"
  size="sm"
  {options}
  value={$currentCSSLibrary}
  on:change={onChange}
/>
