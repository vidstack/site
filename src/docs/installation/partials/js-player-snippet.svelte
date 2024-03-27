<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { selections } from '../selection/selection-stores';

  const { provider, install, css } = selections;

  export let cdn = false;
  export let plyr = false;

  $: isCDN = cdn || $install === 'cdn';

  $: basePath = `docs/player/getting-started/installation/javascript/${plyr ? 'plyr/' : ''}${isCDN ? 'cdn/' : ''}player`;
  $: layout = $css.includes('layout') ? `-${$css}` : '';
  $: id = `${basePath}${layout}`;

  function getScriptSrc() {
    if (plyr) {
      return 'https://cdn.vidstack.io/plyr';
    }

    switch ($css) {
      case 'default-layout':
      case 'plyr-layout':
        return 'https://cdn.vidstack.io/player';
      default:
        return 'https://cdn.vidstack.io/player.core';
    }
  }

  function getSrc() {
    switch ($provider) {
      case 'audio':
        return 'https://files.vidstack.io/sprite-fight/audio.mp3';
      case 'video':
        return 'https://files.vidstack.io/sprite-fight/720p.mp4';
      case 'vimeo':
        return 'vimeo/640499893';
      case 'youtube':
        return 'youtube/_cMxraX_5RE';
      case 'hls':
        return 'https://files.vidstack.io/sprite-fight/hls/stream.m3u8';
      default:
        return '';
    }
  }

  function transform(code: string) {
    return code
      .replace('{SCRIPT_SRC}', getScriptSrc())
      .replace('{TITLE}', 'Sprite Fight')
      .replace('{SRC}', getSrc())
      .replace('{POSTER}', 'https://files.vidstack.io/sprite-fight/poster.webp')
      .replace('{THUMBNAILS}', 'https://files.vidstack.io/sprite-fight/thumbnails.vtt');
  }
</script>

{#key $provider + '::' + $css}
  <CodeSnippet {id} copy {transform} />
{/key}
