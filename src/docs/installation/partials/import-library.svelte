<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import {
    selections,
    type BundlerSelection,
    type JSSelection,
  } from '../selection/selection-stores';
  import ElementsSnippet from './import-elements-snippet.svelte';
  import StylesSnippet from './import-styles-snippet.svelte';

  function getTitle(js: JSSelection, bundler: BundlerSelection) {
    switch (bundler) {
      case 'astro':
        return `src/components/player/${getFileName(js)}`;
      case 'sveltekit':
        return 'src/lib/player/Player.svelte';
      case 'solidstart':
        return 'src/components/player/Player.tsx';
      case 'nuxt':
        return 'components/player/Player.vue';
      case 'vite':
      case 'webpack':
        return `src/components/player/${getFileName(js)}`;
    }
  }

  function getFileName(js: JSSelection) {
    switch (js) {
      case 'svelte':
        return 'Player.svelte';
      case 'vue':
        return 'Player.vue';
      case 'solid':
        return 'Player.tsx';
      default:
        return 'player.html';
    }
  }

  const { js, bundler } = selections;
</script>

{#if $bundler !== 'none'}
  <p>
    The following will auto-import the styles and elements required based on the components and
    themes you're using. You should add the import to any component trees that use the
    <code>vidstack</code> package:
  </p>

  <CodeSnippet
    id="docs/player/getting-started/installation/bundler/bundle"
    title={getTitle($js, $bundler)}
  />
{:else}
  <p>The following imports will include the required CSS styles and variables:</p>

  <StylesSnippet />

  <p>
    The following imports will register all custom media elements (e.g., <code
      >&lt;media-player&gt;</code
    >) and import global TypeScript types:
  </p>

  <ElementsSnippet />
{/if}
