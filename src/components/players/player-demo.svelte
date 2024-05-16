<script lang="ts">
  import clsx from 'clsx';

  import HTMLLogo from '~/icons/html-icon.svelte';
  import JSLogo from '~/icons/js-icon.svelte';
  import ReactLogo from '~/icons/logos/react-logo.svelte';
  import SolidLogo from '~/icons/logos/solid-logo.svelte';
  import SvelteLogo from '~/icons/logos/svelte-logo.svelte';
  import VueLogo from '~/icons/logos/vue-logo.svelte';
  import CodeIcon from '~icons/lucide/code-xml';
  import LinkIcon from '~icons/lucide/link';
  import PlayIcon from '~icons/lucide/play';

  import Shiki from '~/components/code-snippet/shiki.svelte';
  import Label from '~/components/label.svelte';
  import LazyMediaPlayer from '~/components/players/lazy-media-player.svelte';
  import Select from '~/components/select.svelte';
  import Switch from '~/components/switch.svelte';
  import { isDarkColorScheme } from '~/stores/color-scheme';
  import { IS_BROWSER } from '~/utils/env';
  import { updateSearchParams } from '~/utils/history';
  import { data } from 'dist/server/chunks/accessibility_Bd2iMs-I.mjs';
  import debounce from 'just-debounce-it';
  // @ts-ignore
  import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
  // @ts-ignore
  import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
  // @ts-ignore
  import JSONWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
  import { onDestroy, onMount } from 'svelte';
  import { writable } from 'svelte/store';

  import IndeterminateLoadingSpinner from '../style/indeterminate-loading-spinner.svelte';
  import { generateCode, type PlayerDemoFramework } from './code-gen';
  import {
    getSpriteFightSource,
    liveStream,
    sourcePresets,
    spriteFight,
    type LayoutProps,
    type PlayerProps,
    type SourcePresetType,
  } from './defaults';

  export let playerSchema: Record<string, any> = {};
  export let defaultLayoutSchema: Record<string, any> = {};
  export let plyrLayoutSchema: Record<string, any> = {};
  export let playerEventsEnum: string[] = [];

  const defaultPlayerProps = {
    src: getSpriteFightSource('video'),
    viewType: 'video',
    streamType: 'on-demand',
    logLevel: 'warn',
    crossOrigin: true,
    playsInline: true,
    ...spriteFight.player,
  };

  const defaultLayoutProps = spriteFight.layout;

  const defaultCSS = [
    '.media-player[data-view-type="video"] {',
    '  aspect-ratio: 16 / 9;',
    '}',
    '',
    '.vds-video-layout {',
    '  --video-brand: hsl(0, 0%, 96%);',
    '  /* Layout: https://vidstack.io/docs/player/components/layouts/default-layout#video-layout  */',
    '  /* Components: https://www.vidstack.io/docs/player/components/layouts/default-layout#components */',
    '}',
    '',
    '.vds-audio-layout {',
    '  --audio-brand: hsl(0, 0%, 96%);',
    '  /* Layout: https://vidstack.io/docs/player/components/layouts/default-layout#audio-layout */',
    '  /* Components: https://www.vidstack.io/docs/player/components/layouts/default-layout#components */',
    '}',
    '',
    '.plyr {',
    '  --plyr-color-main: hsl(198, 100%, 50%);',
    '  /* CSS Vars: https://vidstack.io/docs/player/components/layouts/plyr-layout#css-variables */',
    '}',
    '',
  ].join('\n');

  const frameworkIcons = {
    js: JSLogo,
    wc: HTMLLogo,
    react: ReactLogo,
    vue: VueLogo,
    solid: SolidLogo,
    svelte: SvelteLogo,
  };

  let preset: SourcePresetType = 'video',
    playerProps: PlayerProps = { ...defaultPlayerProps },
    layoutProps: LayoutProps = { type: 'default', ...defaultLayoutProps },
    css = defaultCSS,
    style: HTMLStyleElement,
    hlsConfig = {},
    dashConfig = {},
    events: string[] = ['can-play'],
    view = writable<'code' | 'player'>('player'),
    framework: PlayerDemoFramework = 'react',
    playerContainer: HTMLElement,
    monacoContainer: HTMLElement,
    editor: any,
    editorLangs: any,
    hasMounted = false,
    activeTab = 0,
    editorData: any = {
      json: {},
      css: {},
    };

  onMount(async () => {
    const url = new URL(location.href),
      frameworkParam = url.searchParams.get('framework'),
      configParam = url.searchParams.get('config'),
      cssParam = url.searchParams.get('css'),
      viewParam = url.searchParams.get('view'),
      presetParam = url.searchParams.get('preset'),
      tabParam = url.searchParams.get('tab');

    if (viewParam) $view = viewParam as 'code' | 'player';
    if (frameworkParam) framework = frameworkParam as PlayerDemoFramework;
    if (presetParam) preset = presetParam as SourcePresetType;
    if (tabParam) activeTab = Number(tabParam);
    if (configParam) onConfigChange(configParam);
    if (cssParam) css = cssParam;

    window.MonacoEnvironment = {
      getWorker: function (_, label) {
        if (label === 'json') return new JSONWorker();
        if (label === 'css') return new CSSWorker();
        return new EditorWorker();
      },
    };

    const { editor: monaco, languages } = await import('monaco-editor/esm');
    editorLangs = languages;

    const codeEditor = monaco.create(monacoContainer, {
      language: 'json',
      automaticLayout: true,
      theme: 'hc-black',
      minimap: { enabled: false },
      lineNumbers: 'off',
      selectionHighlight: false,
      padding: { top: 12, bottom: 12 },
      scrollBeyondLastLine: true,
      formatOnType: true,
      formatOnPaste: true,
      scrollbar: { verticalScrollbarSize: 6, horizontalScrollbarSize: 6 },
      renderLineHighlight: 'none',
      guides: { indentation: false },
      showFoldingControls: 'mouseover',
      fontSize: 12,
    });

    const configValue = generateEditorConfigValue();
    editorData.json.model = monaco.createModel(configValue, 'json');

    editorData.css.model = monaco.createModel(css, 'css');

    codeEditor.setModel(activeTab === 0 ? editorData.json.model : editorData.css.model);
    if (activeTab === 0) fold(codeEditor, configValue);

    const onChange = debounce(() => onEditorContentChange(codeEditor.getValue()), 500);
    codeEditor.onDidChangeModelContent(onChange);

    editor = codeEditor;

    if (playerContainer) {
      style = document.createElement('style');
      style.type = 'text/css';
      style.textContent = css;
      document.head.append(style);
    }

    hasMounted = true;
  });

  onDestroy(() => {
    style?.remove();
    editor?.dispose();
  });

  $: if (IS_BROWSER && hasMounted) {
    updateSearchParams({
      framework,
      view: $view,
      tab: activeTab,
    });
  }

  function generateEditorConfigValue() {
    return JSON.stringify(
      {
        $schema: 'https://vidstack.io/player/schema',
        player: playerProps,
        layout: layoutProps,
        hls: hlsConfig,
        dash: dashConfig,
        events,
      },
      null,
      2,
    );
  }

  function onEditorContentChange(content: string) {
    if (isConfigModel()) {
      onConfigChange(content);
    } else {
      onCSSChange(content);
    }
  }

  function onConfigChange(content: string) {
    try {
      const json = JSON.parse(content);

      playerProps = json.player;
      layoutProps = json.layout;
      hlsConfig = json.hls;
      dashConfig = json.dash;
      events = json.events;

      updateSearchParams({
        config: JSON.stringify({
          player: playerProps,
          layout: layoutProps,
          hls: hlsConfig,
          dash: dashConfig,
          events,
        }),
      });
    } catch (e) {
      console.warn('failed to parse editor content');
    }
  }

  function onCSSChange(content: string) {
    css = content;
    updateSearchParams({ css: content });
  }

  function onReset() {
    playerProps = defaultPlayerProps;
    layoutProps = { type: 'default', ...defaultLayoutProps };
    css = defaultCSS;
    onSelectTab(0);
    updateConfigContent(true);
  }

  function onSourcePresetChange({ detail }: CustomEvent) {
    const newType = detail[0] as SourcePresetType;

    if (newType === preset) return;

    preset = newType;

    if (newType === 'live') {
      playerProps = {
        ...liveStream.player,
        viewType: 'video',
        streamType: 'live',
        logLevel: 'warn',
        crossOrigin: true,
        playsInline: true,
      };

      layoutProps = {
        type: layoutProps.type,
      };
    } else {
      playerProps = {
        ...defaultPlayerProps,
        src: getSpriteFightSource(newType),
        viewType: preset === 'audio' ? 'audio' : 'video',
      };

      layoutProps = {
        type: layoutProps.type,
        ...defaultLayoutProps,
      };
    }

    updateConfigContent(true);
    updateSearchParams({ preset });
  }

  function onFrameworkChange({ detail }: CustomEvent<string[]>) {
    framework = detail[0] as PlayerDemoFramework;
  }

  function updateConfigContent(shouldFold = false) {
    const configValue = generateEditorConfigValue();

    editorData.json.model.setValue(configValue);

    if (shouldFold && isConfigModel()) fold(editor, configValue);
  }

  function isConfigModel() {
    const currentModel = editor?.getModel();
    return currentModel === editorData.json.model;
  }

  function onSelectTab(i: number) {
    if (!editor) return;

    const currentState = editor.saveViewState(),
      currentData = activeTab === 0 ? editorData.json : editorData.css,
      desiredData = activeTab === 0 ? editorData.css : editorData.json;

    currentData.state = currentState;

    editor.setModel(desiredData.model);
    editor.restoreViewState(desiredData.state);
    editor.focus();

    activeTab = i;
  }

  $: viewType = playerProps.viewType;
  $: if (editorLangs) updateSchema(editorLangs, framework, layoutProps.type, viewType);

  function updateSchema(
    languages: any,
    framework: PlayerDemoFramework,
    layoutType: string,
    viewType: string,
  ) {
    const docsURL = `https://vidstack.io/docs/${framework === 'react' ? '' : 'wc/'}player`;

    const playerId = framework === 'react' ? 'mediaplayer' : 'player',
      layoutId = layoutType === 'plyr' ? 'plyrlayout' : `default${viewType}layout`,
      callbackId = framework === 'react' ? 'callbacks' : 'events';

    for (const prop of Object.keys(playerSchema)) {
      playerSchema[prop].markdownDescription =
        `[Link](${docsURL}/components/core/player#${playerId}.props.${prop.toLowerCase()})`;
    }

    for (const prop of Object.keys(defaultLayoutSchema)) {
      defaultLayoutSchema[prop].markdownDescription =
        `[Link](${docsURL}/components/layouts/${layoutType}-layout#${layoutId}.props.${prop.toLowerCase()})`;
    }

    languages.json.jsonDefaults.setDiagnosticsOptions({
      schemas: [
        {
          uri: 'https://vidstack.io/player/schema',
          fileMatch: ['*.json'],
          schema: {
            type: 'object',
            properties: {
              player: {
                type: 'object',
                properties: playerSchema,
                markdownDescription: `[Link](${docsURL}/components/core/player)`,
              },
              layout: {
                type: 'object',
                markdownDescription: `[Link](${docsURL}/components/layouts/${layoutType}-layout)`,
                properties: {
                  type: { enum: ['default', 'plyr'] },
                  ...(layoutType === 'plyr' ? plyrLayoutSchema : defaultLayoutSchema),
                },
              },
              hls: {
                type: 'object',
                markdownDescription:
                  '[Link](https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning)',
              },
              dash: {
                type: 'object',
                markdownDescription:
                  '[Link](https://cdn.dashjs.org/latest/jsdoc/module-Settings.html)',
              },
              events: {
                type: 'array',
                markdownDescription: `[Link](${docsURL}/components/core/player#${playerId}.${callbackId})`,
                items: { enum: playerEventsEnum },
                uniqueItems: true,
              },
            },
          },
        },
      ],
      validate: true,
      allowComments: true,
      trailingCommas: 'ignore',
    });
  }

  function fold(editor: any, value: string) {
    const lines = value.split('\n');
    editor?.trigger('fold', 'editor.fold', {
      direction: 'down',
      selectionLines: [lines.findIndex((s) => s.includes('"textTracks":'))],
    });
  }

  $: showCode = $view === 'code';

  $: code = generateCode({
    framework,
    playerProps,
    layoutProps,
    hlsConfig,
    dashConfig,
  });

  $: if (editor) {
    editor.updateOptions({
      theme: $isDarkColorScheme ? 'hc-black' : 'vs',
    });
  }

  $: if (style) {
    style.textContent = css;
  }

  $: docsURL = `/docs/${framework === 'react' ? '' : 'wc/'}player`;

  $: links = [
    { label: 'Player', href: `${docsURL}/components/core/player#api-reference` },
    { label: 'Default Layout', href: `${docsURL}/components/layouts/default-layout#api-reference` },
    { label: 'Plyr Layout', href: `${docsURL}/components/layouts/plyr-layout#api-reference` },
    {
      label: 'HLS',
      href: `https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning`,
    },
    { label: 'DASH', href: `https://cdn.dashjs.org/latest/jsdoc/module-Settings.html` },
  ];

  $: playerKey = { ...playerProps, ...layoutProps };
</script>

<div class="flex w-full flex-col justify-center text-soft/80 992:flex-row">
  <div
    class="relative inline-flex aspect-video min-w-full max-w-[980px] flex-col 768:min-w-[400px] 992:mt-8 1200:min-w-[600px] 1440:min-w-[744px]"
  >
    {#if !hasMounted}
      <div class="flex aspect-video w-full items-center justify-center">
        <IndeterminateLoadingSpinner size={56} />
      </div>
    {/if}

    <div class={clsx('w-full', !showCode && 'hidden')}>
      {#if hasMounted}
        <Shiki
          class="w-full shadow-sm"
          {code}
          lang={framework === 'js' || framework === 'react' || framework === 'solid'
            ? 'tsx'
            : 'html'}
          numbered
          copy
        >
          <div class="absolute right-16 top-2">
            <Select
              class="backdrop-blur-sm"
              label="JS Framework"
              size="sm"
              value={framework}
              on:change={onFrameworkChange}
              options={[
                { label: 'JavaScript', value: 'js' },
                { label: 'Web Components', value: 'wc' },
                { label: 'React', value: 'react' },
                { label: 'Vue', value: 'vue' },
                { label: 'Svelte', value: 'svelte' },
                { label: 'Solid', value: 'solid' },
              ]}
            >
              <svelte:component
                this={frameworkIcons[framework]}
                class="mr-1.5"
                width={15}
                height={15}
                slot="icon"
              />
            </Select>
          </div>
        </Shiki>
      {/if}
    </div>

    <div class={showCode ? 'hidden' : 'contents'} bind:this={playerContainer}>
      {#if hasMounted}
        {#key playerKey}
          <LazyMediaPlayer
            {...playerProps}
            layout={layoutProps}
            hls={hlsConfig}
            dash={dashConfig}
            {events}
          />
        {/key}
      {/if}
    </div>

    <div class="mt-4 flex w-full items-center justify-center">
      <Switch
        label="Layout"
        defaultValue="player"
        value={view}
        options={[
          { label: 'Show Player', value: 'player', Icon: PlayIcon },
          { label: 'Show Code', value: 'code', Icon: CodeIcon },
        ]}
        on:select={(e) => {
          view.set(e.detail);
        }}
      />
    </div>
  </div>

  <div
    class="mt-8 flex w-full flex-1 flex-col 992:ml-8 992:mt-0 992:max-w-[400px] 1200:max-w-[600px]"
  >
    <div class="mb-2 flex w-full items-center">
      <div class="flex-1"></div>
      <Label label="Preset">
        <Select
          class="mx-3"
          label="Source Preset"
          size="sm"
          value={preset}
          on:change={onSourcePresetChange}
          options={sourcePresets.map((type) => ({ label: type, value: type.toLowerCase() }))}
        />
      </Label>
    </div>

    <div
      class="flex w-full flex-1 flex-col rounded-md border border-border/90 bg-elevate shadow-sm"
    >
      <div class="flex w-full items-center px-4 py-2">
        {#each ['config.json', 'styles.css'] as tab, i}
          <button
            class={clsx(
              'border-b px-4 py-1 font-mono text-xs hocus:text-inverse',
              activeTab === i && 'border-inverse/90 text-inverse',
            )}
            on:click={() => onSelectTab(i)}
          >
            {tab}
          </button>
        {/each}
        <div class="flex-1"></div>
        <button class="rounded-sm p-1 text-[13px] hocus:text-inverse" on:click={onReset}>
          Reset
        </button>
      </div>

      <div class="h-[500px] w-full rounded-md" bind:this={monacoContainer}></div>
    </div>

    <h2 class="mt-10 flex items-center text-lg font-semibold text-inverse 992:mt-6">
      <LinkIcon class="mr-1.5" width={16} height={16} /> API References
    </h2>

    <ul class="mt-2 flex list-disc flex-col space-y-2 pl-4">
      {#each links as { label, href }}
        <li>
          <a
            class="text-sm font-medium text-soft hocus:text-inverse hocus:underline"
            {href}
            target="_blank"
            rel="noreferrer"
          >
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
