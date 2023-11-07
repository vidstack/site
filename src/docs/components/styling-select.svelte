<script lang="ts">
  import Select, { type Option } from '~/components/select.svelte';
  import { cssLibraries, currentCSSLibrary, type CSSLibrary } from '~/stores/libraries';
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
    const url = new URL(location.href);
    url.searchParams.set('styling', cssLib);
    window.history.pushState({}, '', url);
  }
</script>

<Select
  class="px-4 py-1 text-xs ml-1"
  label="Styling Preference"
  size="sm"
  {options}
  value={$currentCSSLibrary}
  on:change={onChange}
/>
