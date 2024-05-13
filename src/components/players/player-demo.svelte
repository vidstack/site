<script lang="ts">
  import clsx from 'clsx';

  import CodeIcon from '~icons/lucide/code-xml';
  import EditIcon from '~icons/lucide/pencil';
  import PlayIcon from '~icons/lucide/play';
  import AddIcon from '~icons/lucide/plus';
  import DeleteIcon from '~icons/lucide/trash-2';

  import Shiki from '~/components/code-snippet/shiki.svelte';
  import Dialog from '~/components/dialog.svelte';
  import Input from '~/components/input.svelte';
  import Label from '~/components/label.svelte';
  import LazyMediaPlayer from '~/components/players/lazy-media-player.svelte';
  import Select from '~/components/select.svelte';
  import Switch from '~/components/switch.svelte';
  import { IS_BROWSER } from '~/utils/env';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { MediaViewType } from 'vidstack';

  import { generateCode } from './code-gen';
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
  } from './media-player.svelte';
  import TrackForm from './track-form.svelte';

  let src = getDefaultSource('video'),
    srcType: any = '',
    poster = defaultPoster,
    thumbnails = defaultThumbnails,
    title = defaultTitle,
    type: SourceType = 'video',
    layout: LayoutType = 'default',
    textTracks: TextTracks = defaultTextTracks,
    codeSwitch = writable<'code' | 'player'>('code'),
    viewType: MediaViewType = 'video',
    theme = 'dark',
    framework: 'js' | 'wc' | 'react' = 'react',
    monacoContainer: HTMLElement;

  onMount(async () => {
    const url = new URL(location.href),
      jsFrameworkParam = url.searchParams.get('framework'),
      layoutParam = url.searchParams.get('layout'),
      themeParam = url.searchParams.get('theme');

    if (jsFrameworkParam) framework = jsFrameworkParam as 'js';
    if (layoutParam) layout = layoutParam as 'default' | 'plyr';
    if (themeParam) theme = themeParam;

    const { editor: monaco } = await import('monaco-editor/esm');
    monaco.create(monacoContainer, {
      value: `{ src: "", }`,
      language: 'js',
      automaticLayout: true,
    });
  });

  $: layoutName = layout === 'default' ? 'default-layout' : 'plyr-layout';
  $: docsURL = `/docs${framework === 'react' ? '' : '/wc'}/player`;

  $: if (IS_BROWSER) {
    const url = new URL(location.href);
    url.searchParams.set('framework', framework);
    history.replaceState(null, '', url);
  }

  $: if (IS_BROWSER) {
    const url = new URL(location.href);
    url.searchParams.set('layout', layout);
    history.replaceState(null, '', url);
  }

  $: if (IS_BROWSER) {
    const url = new URL(location.href);
    url.searchParams.set('theme', theme);
    history.replaceState(null, '', url);
  }

  // @ts-ignore
  $: currentSrc = type === 'custom' ? src : getDefaultSource(type);

  $: showCode = $codeSwitch === 'code';

  function onFrameworkChange({ detail }: CustomEvent) {
    const newFramework = detail[0] as 'js' | 'wc' | 'react';
    framework = newFramework;
  }

  function onSourceTypeChange({ detail }: CustomEvent) {
    const newType = detail[0] as SourceType;
    type = newType;
    src = getDefaultSource(newType);
  }

  function onLayoutChange({ detail }: CustomEvent) {
    const newLayout = detail[0] as LayoutType;
    layout = newLayout;
  }

  function onThemeChange({ detail }: CustomEvent) {
    theme = detail[0];
  }

  function onReset() {
    src = getDefaultSource('video');
    poster = defaultPoster;
    thumbnails = defaultThumbnails;
    title = defaultTitle;
    type = 'video';
    layout = 'default';
    theme = 'dark';
    textTracks = defaultTextTracks;
  }

  $: code = generateCode({
    src,
    srcType,
    type,
    title,
    poster,
    thumbnails,
    viewType,
    textTracks,
    theme,
    framework,
    layout,
  });
</script>

<div class="flex w-full flex-col items-center justify-center text-soft/80 992:flex-row">
  <div class="relative inline-flex max-w-[980px] flex-1 flex-col">
    <div class={clsx('w-full', !showCode && 'hidden')}>
      <Shiki class="w-full shadow-sm" {code} lang="tsx" numbered copy />
    </div>

    <div class={showCode ? 'hidden' : 'contents'}>
      <LazyMediaPlayer
        src={srcType ? { src: currentSrc, type: srcType } : currentSrc}
        {poster}
        {thumbnails}
        {title}
        {type}
        {layout}
        {textTracks}
        {theme}
        on:view-type-change={(event) => {
          viewType = event.detail;
        }}
      />
    </div>

    <div class="mt-4 flex w-full items-center justify-center">
      <Switch
        label="Layout View"
        defaultValue="player"
        value={codeSwitch}
        options={[
          { label: 'Show Player', value: 'player', Icon: PlayIcon },
          { label: 'Show Code', value: 'code', Icon: CodeIcon },
        ]}
        on:select={(e) => {
          codeSwitch.set(e.detail);
        }}
      />
    </div>
  </div>

  <div
    class="mt-8 flex w-full flex-1 flex-col space-y-6 rounded-md border border-border/90 bg-elevate p-4 shadow-sm 992:ml-8 992:mt-0 992:max-w-[350px]"
  >
    <button class="-mb-6 self-end rounded-sm p-1 text-[13px] hocus:text-inverse" on:click={onReset}>
      Reset
    </button>

    <Label label="Title">
      <Input label="Title" bind:value={title} />
    </Label>

    <Label label="Source" info={`${docsURL}/core-concepts/loading#sources`}>
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

    <Label label="Source Type" info={`${docsURL}/core-concepts/loading#source-types`}>
      <Input label="Source Type" placeholder="Example: video/mp4" bind:value={srcType} />
    </Label>

    <Label label="Poster">
      <Input label="Poster" bind:value={poster} />
    </Label>

    <Label label="Thumbnails" info={`${docsURL}/core-concepts/loading#thumbnails`}>
      <Input label="Thumbnails" bind:value={thumbnails} />
    </Label>

    <div class="mt-2 flex w-full flex-wrap items-center">
      <Label class="flex-1" label="Framework">
        <Select
          class="mr-1 mt-2"
          label="JS Framework"
          size="sm"
          value={framework}
          defaultValue="default"
          on:change={onFrameworkChange}
          options={[
            { label: 'JavaScript', value: 'js' },
            { label: 'Web Components', value: 'wc' },
            { label: 'React', value: 'react' },
          ]}
        />
      </Label>

      <Label class="flex-1" label="Layout" info={`${docsURL}/components/layouts/${layoutName}`}>
        <Select
          class="mr-1 mt-2"
          label="Layout"
          size="sm"
          value={layout}
          defaultValue="default"
          on:change={onLayoutChange}
          options={[
            { label: 'Default', value: 'default' },
            { label: 'Plyr', value: 'plyr' },
          ]}
        />
      </Label>

      {#if layout === 'default'}
        <Label
          class="flex-1"
          label="Theme"
          info={`${docsURL}/components/layouts/${layoutName}#color-scheme`}
        >
          <Select
            class="mt-2"
            label="Theme"
            size="sm"
            value={theme}
            defaultValue="dark"
            on:change={onThemeChange}
            options={[
              { label: 'Light', value: 'light' },
              { label: 'Dark', value: 'dark' },
              { label: 'System', value: 'system' },
            ]}
          />
        </Label>
      {/if}
    </div>

    <Label label="Text Tracks" info={`${docsURL}/core-concepts/loading#text-tracks`}>
      <Dialog slot="option">
        <svelte:fragment let:action>
          <button class="rounded-full p-1 hocus:text-inverse" use:action>
            <span class="sr-only">add text track</span>
            <AddIcon width={14} height={14} />
          </button>
        </svelte:fragment>
        <TrackForm
          {docsURL}
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
                {docsURL}
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
                if (textTracks.length <= 1) {
                  textTracks = [];
                } else {
                  textTracks = textTracks.filter((t) => t !== track);
                }
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
