<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { selections, videoProviders, type CSSSelection } from '../selection/selection-stores';

  const { js, css, install, provider } = selections;

  export let cdn = false;
  export let type: CSSSelection | null = null;

  $: isCDN = cdn || $js === 'cdn' || ($js === 'javascript' && $install === 'cdn');

  $: basePath = `docs/player/getting-started/installation/styles${
    isCDN ? '/cdn' : $js === 'react' ? '/react' : ''
  }`;

  $: style = type ?? $css;

  $: styleId =
    style === 'css' || style === 'tailwind-css'
      ? 'base'
      : style === 'plyr-layout'
        ? style
        : style === 'default-layout'
          ? `${style}-${videoProviders.has($provider) ? 'video' : $provider}`
          : 'default-theme';

  $: id = `${basePath}/import-${styleId}`;

  $: title = $js === 'cdn' ? 'html' : 'js';
</script>

<CodeSnippet {id} {title} copy />
