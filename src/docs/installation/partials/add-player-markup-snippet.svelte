<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { selections, videoProviders } from '../selection/selection-stores';

  const { js, provider, css } = selections;

  $: dir = $js === 'react' ? 'react' : 'wc';
  $: basePath = `docs/player/getting-started/installation/markup/${dir}`;

  $: importId =
    $css === 'default-layout' || $css === 'plyr-layout'
      ? `${$css}-${
          $provider === 'remotion'
            ? 'remotion'
            : videoProviders.has($provider)
              ? 'video'
              : $provider
        }`
      : `base${$provider === 'remotion' ? '-remotion' : ''}`;

  $: id = `${basePath}/${importId}`;

  $: title = $js === 'react' ? 'jsx' : 'html';

  function getSource() {
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
      case 'dash':
        return 'https://files.vidstack.io/sprite-fight/dash/stream.mpd';
      default:
        return '';
    }
  }

  function transform(code: string) {
    return code
      .replace('{TITLE}', 'Sprite Fight')
      .replace('{SRC}', getSource())
      .replace('{THUMBNAILS}', `https://files.vidstack.io/sprite-fight/thumbnails.vtt`);
  }
</script>

{#key $provider}
  <CodeSnippet {id} {title} copy {transform} />
{/key}
