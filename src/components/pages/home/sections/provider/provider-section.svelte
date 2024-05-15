<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';
  import TabPanel from '~/components/tabs/tab-panel.svelte';
  import Tabs from '~/components/tabs/tabs.svelte';

  import JsFrameworkSelect from '../js-framework-select.svelte';
  import { jsFramework } from '../shared';

  let options = ['Audio', 'Video', 'Blob', 'HLS', 'DASH', 'YouTube', 'Vimeo'];

  $: id = `home/provider/react`.replace(
    /\/(wc|react)/,
    `/${$jsFramework === 'react' ? 'react' : 'wc'}`,
  );

  $: ext = $jsFramework === 'react' ? 'tsx' : 'html';

  $: if ($jsFramework === 'react') {
    options = [...options, 'Remotion'];
  } else {
    options = options.filter((option) => option !== 'Remotion');
  }
</script>

<div class="relative mx-auto -mt-6 flex w-full max-w-[795px] items-center justify-center">
  {#key $jsFramework}
    <Tabs label="providers" tabs={options} block>
      {#each options as option}
        {@const label = option.toLowerCase()}
        <TabPanel>
          <CodeSnippet title={`${label}.${ext}`} id={`${id}/${label}.${ext}`} />
        </TabPanel>
      {/each}
    </Tabs>
  {/key}

  <JsFrameworkSelect class="absolute right-3 top-[90px] z-50" />
</div>
