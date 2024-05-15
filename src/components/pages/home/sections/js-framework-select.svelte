<script lang="ts">
  import Select from '~/components/select.svelte';

  import { jsFramework, type JSFramework } from './shared';

  function onFrameworkChange({ detail }: CustomEvent<string[]>) {
    $jsFramework = detail[0] as JSFramework;
  }

  let _class = '';
  export { _class as class };

  export let js = false;

  $: options = [
    js && { label: 'JavaScript', value: 'js' },
    { label: 'React', value: 'react' },
    { label: 'Web Components', value: 'wc' },
  ].filter(Boolean) as { label: string; value: string }[];
</script>

<div class={_class}>
  <Select
    class="px-4 py-1 font-semibold"
    label="JS Framework"
    size="sm"
    {options}
    value={!js && $jsFramework === 'js' ? 'wc' : $jsFramework}
    defaultValue="react"
    on:change={onFrameworkChange}
  />
</div>
