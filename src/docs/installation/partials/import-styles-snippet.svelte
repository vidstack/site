<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { selections, videoProviders } from '../selection/selection-stores';

  const { js, css, provider } = selections;

  $: basePath = `docs/player/getting-started/installation/styles${
    $js === 'cdn' ? '/cdn' : $js === 'react' ? '/react' : ''
  }`;

  $: styleId =
    $css === 'css' || $css === 'tailwind-css'
      ? 'base'
      : $css === 'plyr-layout'
        ? $css
        : $css === 'default-layout'
          ? `${$css}-${videoProviders.has($provider) ? 'video' : $provider}`
          : 'default-theme';

  $: id = `${basePath}/import-${styleId}`;

  $: title = $js === 'cdn' ? 'html' : 'js';
</script>

<CodeSnippet {id} {title} copy />
