<script lang="ts">
  import DefaultThemeIcon from '~/docs/installation/icons/default-theme-icon.svelte';
  import CSSIcon from '~/icons/css-icon.svelte';
  import TailwindLogo from '~/icons/logos/tailwind-logo.svelte';

  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';
  import Select from '~/components/select.svelte';
  import TabPanel from '~/components/tabs/tab-panel.svelte';
  import Tabs from '~/components/tabs/tabs.svelte';

  const options = [
    { label: 'Default Theme', Icon: DefaultThemeIcon },
    { label: 'CSS', Icon: CSSIcon },
    { label: 'Tailwind CSS', Icon: TailwindLogo },
  ];

  let idRoot = `docs/player/components/sliders/time-slider/examples/react/with-chapters`,
    framework = 'react';

  function onFrameworkChange({ detail }: CustomEvent<string[]>) {
    framework = detail[0];
    idRoot = idRoot.replace(/\/(wc|react)\//, `/${framework}/`);
  }

  $: ext = framework === 'react' ? 'tsx' : 'html';
</script>

<div class="relative mx-auto flex w-full max-w-[680px] items-center justify-center">
  <Tabs label="styling options" tabs={options} block>
    <TabPanel>
      <CodeSnippet title={`time-slider.${ext}`} id={`${idRoot}/default-theme.${ext}`} />
    </TabPanel>
    <TabPanel>
      <CodeSnippet title="time-slider.css" id={`${idRoot}/css.css`} />
    </TabPanel>
    <TabPanel>
      <CodeSnippet title={`time-slider.${ext}`} id={`${idRoot}/tailwind-css.${ext}`} />
    </TabPanel>
  </Tabs>
  <div class="absolute right-4 top-[92px] z-50">
    <Select
      class="px-4 py-1 font-semibold"
      label="JS Framework"
      size="sm"
      options={[
        { label: 'React', value: 'react' },
        { label: 'Web Components', value: 'wc' },
      ]}
      defaultValue="react"
      on:change={onFrameworkChange}
    />
  </div>
</div>
