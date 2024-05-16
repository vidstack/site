<script lang="ts">
  import HTMLLogo from '~/icons/html-icon.svelte';
  import JSLogo from '~/icons/js-icon.svelte';
  import ReactLogo from '~/icons/logos/react-logo.svelte';

  import Select from '~/components/select.svelte';

  import { jsFramework, type JSFramework } from './shared';

  function onFrameworkChange({ detail }: CustomEvent<string[]>) {
    if (!js && $jsFramework === 'js') return;
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

  const Icons = {
    js: JSLogo,
    wc: HTMLLogo,
    react: ReactLogo,
  };
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
  >
    <svelte:component
      this={Icons[$jsFramework]}
      class="mr-1.5"
      width={15}
      height={15}
      slot="icon"
    />
  </Select>
</div>
