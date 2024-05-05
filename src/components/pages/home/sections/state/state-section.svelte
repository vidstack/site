<script lang="ts">
  import ReadIcon from '~icons/lucide/circle-arrow-down';
  import WriteIcon from '~icons/lucide/circle-arrow-up';

  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';
  import Select from '~/components/select.svelte';
  import TabPanel from '~/components/tabs/tab-panel.svelte';
  import Tabs from '~/components/tabs/tabs.svelte';

  const options = [
    { label: 'Read', Icon: ReadIcon },
    { label: 'Update', Icon: WriteIcon },
  ];

  let idRoot = `home/state/react`,
    framework = 'react';

  function onFrameworkChange({ detail }: CustomEvent<string[]>) {
    framework = detail[0];
    idRoot = idRoot.replace(/\/(wc|react)/, `/${framework}`);
  }

  $: ext = framework === 'react' ? 'tsx' : 'ts';
</script>

<div class="relative mx-auto -mt-6 flex w-full max-w-[680px] items-center justify-center">
  <Tabs label="state usage options" tabs={options} block justify="center">
    <TabPanel>
      <CodeSnippet id={`${idRoot}/read.${ext}`} />
    </TabPanel>
    <TabPanel>
      <CodeSnippet id={`${idRoot}/write.${ext}`} />
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
