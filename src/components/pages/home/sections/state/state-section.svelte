<script lang="ts">
  import ReadIcon from '~icons/lucide/circle-arrow-down';
  import WriteIcon from '~icons/lucide/circle-arrow-up';

  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';
  import TabPanel from '~/components/tabs/tab-panel.svelte';
  import Tabs from '~/components/tabs/tabs.svelte';

  import JsFrameworkSelect from '../js-framework-select.svelte';
  import { jsFramework } from '../shared';

  const options = [
    { label: 'Read', Icon: ReadIcon },
    { label: 'Update', Icon: WriteIcon },
  ];

  $: id = `home/state/react`.replace(
    /\/(wc|react)/,
    `/${$jsFramework === 'react' ? 'react' : 'wc'}`,
  );

  $: ext = $jsFramework === 'react' ? 'tsx' : 'ts';
</script>

<div class="relative mx-auto -mt-4 flex w-full max-w-[680px] items-center justify-center">
  <Tabs label="state usage options" tabs={options} block justify="center">
    <TabPanel>
      <CodeSnippet id={`${id}/read.${ext}`} />
    </TabPanel>
    <TabPanel>
      <CodeSnippet id={`${id}/write.${ext}`} />
    </TabPanel>
  </Tabs>

  <JsFrameworkSelect class="absolute right-3 top-[90px] z-50" />
</div>
