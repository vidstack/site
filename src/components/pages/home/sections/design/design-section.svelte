<script lang="ts">
  import DefaultThemeIcon from '~/docs/installation/icons/default-theme-icon.svelte';
  import CSSIcon from '~/icons/css-icon.svelte';
  import TailwindLogo from '~/icons/logos/tailwind-logo.svelte';

  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';
  import TabPanel from '~/components/tabs/tab-panel.svelte';
  import Tabs from '~/components/tabs/tabs.svelte';

  import JsFrameworkSelect from '../js-framework-select.svelte';
  import { jsFramework } from '../shared';

  const options = [
    { label: 'Default Theme', Icon: DefaultThemeIcon },
    { label: 'CSS', Icon: CSSIcon },
    { label: 'Tailwind CSS', Icon: TailwindLogo },
  ];

  $: id = `docs/player/components/sliders/time-slider/examples/react/with-chapters`.replace(
    /\/(wc|react)\//,
    `/${$jsFramework}/`,
  );

  $: ext = $jsFramework === 'react' ? 'tsx' : 'html';
</script>

<div class="relative mx-auto -mt-6 flex w-full max-w-[680px] items-center justify-center">
  <Tabs label="styling options" tabs={options} block justify="center">
    <TabPanel>
      <CodeSnippet title={`time-slider.${ext}`} id={`${id}/default-theme.${ext}`} />
    </TabPanel>
    <TabPanel>
      <CodeSnippet title="time-slider.css" id={`${id}/css.css`} />
    </TabPanel>
    <TabPanel>
      <CodeSnippet title={`time-slider.${ext}`} id={`${id}/tailwind-css.${ext}`} />
    </TabPanel>
  </Tabs>
  <JsFrameworkSelect />
</div>
