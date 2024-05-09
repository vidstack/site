<script lang="ts">
  import clsx from 'clsx';

  import HTMLIcon from '~/icons/html-icon.svelte';
  import JSIcon from '~/icons/js-icon.svelte';
  import AngularLogo from '~/icons/logos/angular-logo.svelte';
  import JSDelivrLogo from '~/icons/logos/jsdelivr-logo.svelte';
  import ReactLogo from '~/icons/logos/react-logo.svelte';
  import SolidLogo from '~/icons/logos/solid-logo.svelte';
  import SvelteLogo from '~/icons/logos/svelte-logo.svelte';
  import VueLogo from '~/icons/logos/vue-logo.svelte';
  import EditIcon from '~icons/lucide/pencil';
  import AddIcon from '~icons/lucide/plus';
  import DeleteIcon from '~icons/lucide/trash-2';

  import Dialog from '~/components/dialog.svelte';
  import LazyMediaPlayer from '~/components/players/lazy-media-player.svelte';
  import {
    defaultPoster,
    defaultTextTracks,
    defaultThumbnails,
    defaultTitle,
    getDefaultSource,
    sourceTypes,
    type LayoutType,
    type SourceType,
    type TextTracks,
  } from '~/components/players/media-player.svelte';
  import Select from '~/components/select.svelte';

  import Input from './input.svelte';
  import Label from './label.svelte';
  import TrackForm from './track-form.svelte';

  let src = getDefaultSource('video'),
    poster = defaultPoster,
    thumbnails = defaultThumbnails,
    title = defaultTitle,
    type: SourceType = 'video',
    layout: LayoutType = 'default',
    textTracks: TextTracks = defaultTextTracks;

  // @ts-ignore
  $: currentSrc = type === 'custom' ? src : getDefaultSource(type);

  function onSourceTypeChange({ detail }: CustomEvent) {
    const newType = detail[0] as SourceType;
    type = newType;
    src = getDefaultSource(newType);
  }

  function onLayoutChange({ detail }: CustomEvent) {
    const newLayout = detail[0] as LayoutType;
    layout = newLayout;
  }

  function onReset() {
    src = getDefaultSource('video');
    poster = defaultPoster;
    thumbnails = defaultThumbnails;
    title = defaultTitle;
    type = 'video';
    layout = 'default';
    textTracks = defaultTextTracks;
  }

  const displayIcons = [
    { Icon: JSIcon, size: 32, framework: 'javascript' },
    { Icon: HTMLIcon, size: 32, framework: 'web-components' },
    { Icon: AngularLogo, size: 32, framework: 'angular' },
    { Icon: JSDelivrLogo, size: 30, framework: 'cdn' },
    { Icon: ReactLogo, size: 32, framework: 'react' },
    { Icon: SolidLogo, size: 30, framework: 'solid' },
    { Icon: SvelteLogo, size: 28, framework: 'svelte' },
    { Icon: VueLogo, size: 28, framework: 'vue' },
  ];
</script>

<div class="flex flex-col">
  <div class="-mt-8 mb-10 flex w-full items-center justify-center space-x-2">
    {#each displayIcons as { Icon, framework, size }}
      <a
        class="rounded-md p-2 transition-transform duration-300 hocus:scale-110 hocus:bg-elevate"
        href={`/docs/player/getting-started/installation/${framework}?bundler=none&provider=${type}&styling=${layout === 'default' ? 'default-layout' : 'plyr-layout'}`}
      >
        <svelte:component this={Icon} width={size} height={size} />
      </a>
    {/each}
  </div>

  <div class="flex w-full flex-col items-center justify-center text-soft/80 992:flex-row">
    <div class="relative inline-flex flex-1">
      <LazyMediaPlayer
        src={currentSrc}
        {poster}
        {thumbnails}
        {title}
        {type}
        {layout}
        {textTracks}
      />
    </div>

    <div
      class="mt-8 flex w-full flex-1 flex-col space-y-6 rounded-md border border-border/90 bg-elevate p-4 shadow-sm 992:mb-0 992:ml-8 992:max-w-[350px]"
    >
      <button
        class="-mb-6 self-end rounded-sm p-1 text-[13px] hocus:text-inverse"
        on:click={onReset}
      >
        Reset
      </button>

      <Label label="Title">
        <Input label="Title" bind:value={title} />
      </Label>

      <Label label="Source" info="/docs/player/core-concepts/loading#source-types">
        <Select
          label="Source Preset"
          size="sm"
          value={type}
          on:change={onSourceTypeChange}
          options={sourceTypes.map((type) => ({ label: type, value: type.toLowerCase() }))}
          slot="option"
        />
        <Input
          label="Source"
          bind:value={src}
          on:change={() => {
            type = 'custom';
          }}
        />
      </Label>

      <Label label="Poster">
        <Input label="Poster" bind:value={poster} />
      </Label>

      <Label label="Thumbnails" info="/docs/player/core-concepts/loading#thumbnails">
        <Input label="Thumbnails" bind:value={thumbnails} />
      </Label>

      <Label
        label="Layout"
        info={`/docs/player/components/layouts/${layout === 'default' ? 'default-layout' : 'plyr-layout'}`}
      >
        <Select
          class="mt-2"
          label="Layout"
          size="sm"
          value={layout}
          on:change={onLayoutChange}
          options={[
            { label: 'Default', value: 'default' },
            { label: 'Plyr', value: 'plyr' },
          ]}
        />
      </Label>

      <Label label="Text Tracks" info="/docs/player/core-concepts/loading#text-tracks">
        <Dialog slot="option">
          <svelte:fragment let:action>
            <button class="rounded-full p-1 hocus:text-inverse" use:action>
              <span class="sr-only">add text track</span>
              <AddIcon width={14} height={14} />
            </button>
          </svelte:fragment>
          <TrackForm
            slot="content"
            on:save={({ detail: track }) => {
              textTracks = [...textTracks, track];
            }}
          />
        </Dialog>

        {#each textTracks as track, i}
          {@const title = `${track.kind}${track.label ? ` (${track.label.toLowerCase()})` : ''}`}
          <ul class="mt-4 flex w-full flex-col space-y-4">
            <li class="flex items-center font-mono text-xs">
              {title}
              <div class="flex-1"></div>
              <Dialog let:action>
                <button class="rounded-full p-1 hocus:text-green-500" use:action>
                  <span class="sr-only">edit {title}</span>
                  <EditIcon width={14} height={14} />
                </button>
                <TrackForm
                  {track}
                  slot="content"
                  on:save={({ detail: track }) => {
                    textTracks[i] = track;
                  }}
                />
              </Dialog>
              <button
                class="ml-1 rounded-full p-1 hocus:text-red-500"
                on:click={() => {
                  textTracks = textTracks.filter((t) => t !== track);
                }}
              >
                <span class="sr-only">delete {title}</span>
                <DeleteIcon width={14} height={14} />
              </button>
            </li>
          </ul>
        {/each}
      </Label>
    </div>
  </div>

  <!-- SHOW CODE - JS/Angular/React/Svelte/Vue/Solid/WC/CDN -->
</div>
