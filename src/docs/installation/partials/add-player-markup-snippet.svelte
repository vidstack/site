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

  function transform(code: string) {
    const title = 'Sprite Fight',
      src =
        $provider === 'vimeo'
          ? 'vimeo/640499893'
          : $provider === 'youtube'
            ? 'youtube/_cMxraX_5RE'
            : $provider === 'audio'
              ? 'https://files.vidstack.io/sprite-fight/audio.mp3'
              : $provider === 'video'
                ? `https://files.vidstack.io/sprite-fight/1080p.mp4`
                : `https://files.vidstack.io/sprite-fight/hls/stream.m3u8`,
      thumbnails = `https://files.vidstack.io/sprite-fight/thumbnails.vtt`;

    return code.replace('{TITLE}', title).replace('{SRC}', src).replace('{THUMBNAILS}', thumbnails);
  }
</script>

{#key $provider}
  <CodeSnippet {id} {title} copy {transform} />
{/key}
