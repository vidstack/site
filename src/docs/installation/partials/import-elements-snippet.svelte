<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { selections, videoProviders } from '../selection/selection-stores';

  const { js, provider, css } = selections;

  $: dir = $js === 'cdn' ? 'cdn' : $js === 'react' ? 'react' : 'wc';
  $: basePath = `docs/player/getting-started/installation/elements/${dir}`;

  $: importId =
    $css === 'default-layout'
      ? $js === 'react'
        ? `default-layout-${
            $provider === 'remotion'
              ? 'remotion'
              : videoProviders.has($provider)
                ? 'video'
                : $provider
          }`
        : 'default-layout'
      : `base${$provider === 'remotion' ? '-remotion' : ''}`;

  $: id = `${basePath}/import-${importId}`;

  $: title = $js === 'cdn' ? 'html' : 'js';
</script>

<CodeSnippet {id} {title} copy />
