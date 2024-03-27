<script lang="ts">
  import CodeSnippet from '~/components/code-snippet/code-snippet.svelte';

  import { selections, type ProviderSelection } from '../selection/selection-stores';

  const { provider } = selections;

  $: basePath = `docs/player/getting-started/installation/javascript`;
  $: id = `${basePath}/target-${getTarget($provider)}`;

  function getTarget(provider: ProviderSelection) {
    switch (provider) {
      case 'audio':
        return 'audio';
      case 'vimeo':
      case 'youtube':
        return 'iframe';
      default:
        return 'video';
    }
  }
</script>

{#key $provider}
  <CodeSnippet {id} />
{/key}
