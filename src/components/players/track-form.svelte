<script lang="ts">
  import Input from '~/components/input.svelte';
  import Label from '~/components/label.svelte';
  import Select from '~/components/select.svelte';
  import { createEventDispatcher } from 'svelte';

  export let track: any = undefined;
  export let docsURL: string;

  const dispatch = createEventDispatcher();

  let src = track?.src,
    label = track?.label ?? 'English',
    srclang = track?.srclang ?? 'en-US',
    type = track?.['data-type'] ?? 'vtt',
    kind: TextTrackKind = track?.kind ?? 'captions',
    isDefault = track?.default;

  function onSave() {
    dispatch('save', {
      src,
      label,
      srclang,
      kind,
      default: isDefault,
      'data-type': type,
    });
  }
</script>

<div class="flex flex-col space-y-7 px-4">
  <Label label="Source">
    <Input label="Source" placeholder="URL" bind:value={src} />
  </Label>

  <Label label="Label">
    <Input label="Label" placeholder="English" bind:value={label} />
  </Label>

  <Label label="Language">
    <Input label="Language" placeholder="en-US" bind:value={srclang} />
  </Label>

  <Label label="Type" info={`${docsURL}/core-concepts/loading#text-track-formats`}>
    <Select
      class="mt-3"
      label="Type"
      size="sm"
      value={type}
      on:change={({ detail }) => {
        type = detail[0];
      }}
      options={['VTT', 'SRT', 'ASS', 'JSON'].map((kind) => ({
        label: kind,
        value: kind.toLowerCase(),
      }))}
    />
  </Label>

  <Label label="Kind" info={`${docsURL}/core-concepts/loading#text-track-kinds`}>
    <Select
      class="mt-3"
      label="Kind"
      size="sm"
      value={kind}
      on:change={({ detail }) => {
        kind = detail[0];
      }}
      options={['Captions', 'Subtitles', 'Chapters', 'Descriptions', 'Metadata'].map((kind) => ({
        label: kind,
        value: kind.toLowerCase(),
      }))}
    />
  </Label>

  <Label label="Default" info={`${docsURL}/core-concepts/loading#text-track-default`}>
    <input
      class="mt-2 h-4 w-4 rounded-md accent-brand"
      type="checkbox"
      bind:checked={isDefault}
      aria-label="Default"
    />
  </Label>

  <button
    class="rounded-md border border-border/90 bg-elevate px-2 py-2 text-sm shadow-md hocus:bg-inverse/10"
    data-close
    on:click={onSave}
  >
    Save
  </button>
</div>
