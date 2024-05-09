<script lang="ts">
  import Select from '~/components/select.svelte';

  import { jsFramework } from './shared';

  function onFrameworkChange({ detail }: CustomEvent<string[]>) {
    $jsFramework = detail[0] as 'react' | 'wc';
  }
</script>

<div class="absolute right-3 top-[90px] z-50">
  <Select
    class="px-4 py-1 font-semibold"
    label="JS Framework"
    size="sm"
    options={[
      { label: 'React', value: 'react' },
      { label: 'Web Components', value: 'wc' },
    ]}
    value={$jsFramework}
    defaultValue="react"
    on:change={onFrameworkChange}
  />
</div>
