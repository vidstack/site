<script lang="ts">
  import SplitCodePane from '../../split-pane/split-code-pane.svelte';

  export let hidePreview = false;
</script>

{#if hidePreview}
  <div class="flex pl-3 pr-1 py-2.5 overflow-auto">
    <slot name="editor" />
  </div>
{:else}
  <SplitCodePane class="flex-1 flex w-full flex-col @4xl:flex-row" {hidePreview}>
    <div class="flex pl-3 pr-1 py-2.5 overflow-auto" style="display: none" data-pane slot="left">
      <slot name="editor" />
    </div>

    <div
      class="overflow-auto grow basis-0 scrollbar scrollbar-square"
      style="display: none"
      data-pane
      slot="right"
    >
      <div class="p-2 w-full h-full flex items-center justify-center">
        <slot name="preview" />
      </div>
    </div>
  </SplitCodePane>
{/if}
