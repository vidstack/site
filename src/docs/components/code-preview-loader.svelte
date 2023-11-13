<script lang="ts">
  import type { CodePreview } from ':code_previews';
  import { codePreviews } from '~/stores/code-previews';
  import { listenEvent } from '~/utils/events';
  import { onMount } from 'svelte';

  export let id: string | undefined;
  export let path: string | undefined = undefined;

  let component: any = undefined,
    isHidden = !!path;

  onMount(() => {
    if (path) {
      const el = document.querySelector(`.code-editor ul[data-path="${path}"]`),
        isExpanded = el?.matches('[aria-expanded="true"]');

      isHidden = !isExpanded;

      return listenEvent(window, 'code-editor-change' as any, (event) => {
        const { path: filePath } = event.detail;
        isHidden = !filePath.startsWith(path);
      });
    }
  });

  async function loadPreview(previews: CodePreview[], id: string | undefined) {
    component = undefined;

    if (!id) return;

    const preview = previews.find((preview) => preview.id === id);
    if (preview) {
      component = (await preview.loader()).default;
    }
  }

  $: loadPreview($codePreviews, id);
</script>

<div class={isHidden ? 'hidden' : null}>
  <svelte:component this={component} />
</div>
