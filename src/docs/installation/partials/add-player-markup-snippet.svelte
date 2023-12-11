<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { selections, videoProviders } from '../selection/selection-stores';

  const { js, provider, css } = selections;

  $: dir = $js === 'react' ? 'react' : 'wc';
  $: basePath = `docs/player/getting-started/installation/markup/${dir}`;

  $: importId =
    $css === 'default-layout'
      ? `default-layout-${
          $provider === 'remotion'
            ? 'remotion'
            : videoProviders.has($provider)
              ? 'video'
              : $provider
        }`
      : `base${$provider === 'remotion' ? '-remotion' : ''}`;

  $: id = `${basePath}/${importId}`;

  $: title = $js === 'react' ? 'jsx' : 'html';

  const muxPlaybackId = 'VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU';

  function transform(code: string) {
    const title = 'Sprite Fight',
      src =
        $provider === 'vimeo'
          ? 'vimeo/640499893'
          : $provider === 'youtube'
            ? 'youtube/_cMxraX_5RE'
            : $provider === 'audio'
              ? 'https://media-files.vidstack.io/sprite-fight/audio.mp3'
              : $provider === 'video'
                ? `https://stream.mux.com/${muxPlaybackId}/low.mp4`
                : `https://stream.mux.com/${muxPlaybackId}.m3u8`,
      thumbnails = `https://image.mux.com/${muxPlaybackId}/storyboard.vtt`;

    return code.replace('{TITLE}', title).replace('{SRC}', src).replace('{THUMBNAILS}', thumbnails);
  }
</script>

{#key $provider}
  <CodeSnippet {id} {title} copy {transform} />
{/key}
