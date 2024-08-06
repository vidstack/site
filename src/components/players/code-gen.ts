import { camelToKebabCase } from '~/utils/string';
import { isArray, isString } from '~/utils/unit';
import JSON5 from 'json5';

import type { LayoutProps, PlayerProps } from './defaults';

export type PlayerDemoFramework = 'js' | 'wc' | 'react' | 'vue' | 'svelte' | 'solid';

interface Props {
  framework: PlayerDemoFramework;
  playerProps: PlayerProps;
  layoutProps: LayoutProps;
  hlsConfig: Record<string, any>;
  dashConfig: Record<string, any>;
}

export function generateCode(props: Props) {
  const { framework } = props;

  const lines: string[] = [];

  if (framework === 'js') {
    lines.push('');
    lines.push(...generateJSCode(props));
  } else if (framework === 'react') {
    lines.push('');
    lines.push(...generateReactCode(props));
  } else {
    lines.push(...generateWCCode(props));
  }

  return lines.join('\n');
}

function generateJSCode({ playerProps, layoutProps, hlsConfig, dashConfig }: Props) {
  const lines: string[] = [],
    { textTracks, ...playerConfig } = playerProps,
    { type: layoutType, ...layoutConfig } = layoutProps,
    hasHLSConfig = !!Object.keys(hlsConfig).length,
    hasDASHConfig = !!Object.keys(dashConfig).length,
    hasProviderConfig = hasHLSConfig || hasDASHConfig;

  lines.push(...generateStyleImports(layoutType));
  lines.push('');

  const layoutClass = layoutType === 'default' ? 'VidstackPlayerLayout' : 'PlyrLayout';

  if (hasProviderConfig) {
    const imports = [hasHLSConfig && 'isHLSProvider', hasDASHConfig && 'isDASHProvider'].filter(
      Boolean,
    );

    if (imports.length) {
      lines.push(`import { ${imports.join(', ')} } from "vidstack"`);
    }
  }

  lines.push(`import { VidstackPlayer, ${layoutClass} } from "vidstack/player"`);
  lines.push('');

  lines.push(`const layout = new ${layoutClass}(${stringify(layoutConfig)});`);
  lines.push('');

  lines.push(
    `const player = await VidstackPlayer.create(${stringify({
      target: '#target',
      ...playerConfig,
      layout: '__LAYOUT__',
      tracks: textTracks,
    }).replace(`: '__LAYOUT__'`, '')});`,
  );

  if (hasProviderConfig) {
    lines.push('');
    lines.push(`player.addEventListener('provider-change', (event) => {`);
    lines.push(`  const provider = event.detail;`);

    if (hasHLSConfig) {
      lines.push(`  if (isHLSProvider(provider)) {`);
      lines.push(`    provider.config = ${stringify(hlsConfig).replace(/\n/g, '\n    ')}`);
      lines.push(`  }`);
    }

    if (hasDASHConfig) {
      if (hasHLSConfig) lines.push('');
      lines.push(`  if (isDASHProvider(provider)) {`);
      lines.push(`    provider.config = ${stringify(dashConfig).replace(/\n/g, '\n    ')}`);
      lines.push(`  }`);
    }

    lines.push(`});`);
  }

  return lines;
}

function generateWCCode({ framework, playerProps, layoutProps, hlsConfig, dashConfig }: Props) {
  const lines: string[] = [],
    { type: layoutType, ...layoutAttrs } = layoutProps,
    { src, textTracks, ...playerAttrs } = playerProps,
    hasHLSConfig = !!Object.keys(hlsConfig).length,
    hasDASHConfig = !!Object.keys(dashConfig).length,
    hasProviderConfig = hasHLSConfig || hasDASHConfig,
    hasPoster = playerProps.poster && layoutType === 'default' && playerProps.viewType === 'video';

  if (framework === 'vue') {
    lines.push('<script setup lang="ts">');
  } else if (framework === 'svelte') {
    lines.push('<script lang="ts">');
  } else if (framework === 'wc') {
    lines.push('<script type="module">');
  }

  lines.push(...generateStyleImports(layoutType, 0));
  lines.push('');

  lines.push(`import 'vidstack/player';`);
  lines.push(`import 'vidstack/player/layouts/${layoutType}';`);
  lines.push(`import 'vidstack/player/ui';`);

  if (hasProviderConfig) {
    lines.push('');

    const imports = [
      framework !== 'wc' && 'type MediaProviderChangeEvent',
      hasHLSConfig && 'isHLSProvider',
      hasDASHConfig && 'isDASHProvider',
    ].filter(Boolean);

    if (imports.length) {
      lines.push(`import { ${imports.join(', ')} } from 'vidstack';`);
      lines.push('');
    }

    if (framework === 'wc') {
      lines.push('function onProviderChange(event) {');
    } else {
      lines.push('function onProviderChange(event: MediaProviderChangeEvent) {');
    }

    lines.push('  const provider = event.detail;');

    if (hasHLSConfig) {
      lines.push(`  if (isHLSProvider(provider)) {`);
      lines.push(`    provider.config = ${stringify(hlsConfig).replace(/\n/g, '\n    ')}`);
      lines.push(`  }`);
    }

    if (hasDASHConfig) {
      if (hasHLSConfig) lines.push('');
      lines.push(`  if (isDASHProvider(provider)) {`);
      lines.push(`    provider.config = ${stringify(dashConfig).replace(/\n/g, '\n    ')}`);
      lines.push(`  }`);
    }

    lines.push(`}`);

    if (framework === 'wc') {
      lines.push('');
      lines.push(`const player = document.querySelector('media-player');`);
      lines.push(`player.addEventListener('provider-change', onProviderChange);`);
    }
  }

  if (framework !== 'solid') {
    lines.push(`</script>`);
  }

  lines.push('');

  let playerTag = '<media-player';
  playerTag += generateAttrs(playerAttrs, framework);

  if (hasProviderConfig && framework !== 'wc') {
    playerTag += generateListeners({ 'provider-change': 'onProviderChange' }, framework);
  }

  lines.push(playerTag + '\n>');

  lines.push(`  <media-provider>`);

  if (hasPoster) {
    lines.push(`    <media-poster class="vds-poster"></media-poster>`);
  }

  if (isArray(src)) {
    for (const source of src) {
      if (isString(source)) {
        lines.push(`    <source src="${source}" />`);
      } else {
        lines.push(`    <source src="${source}" type="${source.type}" />`);
      }
    }
  } else if (!isString(src)) {
    lines.push(`    <source src="${src}" type="${src.type}" />`);
  } else {
    lines.push(`    <source src="${src}" />`);
  }

  for (const track of textTracks) {
    let html = '<track';
    html += generateAttrs(track, 'wc', 3);
    const space = '  '.repeat(2);
    lines.push(`${space}${html}\n${space}/>`);
  }

  lines.push(`  </media-provider>`);

  const layoutEl = layoutType === 'default' ? playerProps.viewType : 'plyr';

  let layoutTag = `  <media-${layoutEl}-layout`;
  layoutTag += generateAttrs(layoutAttrs, framework, 2);
  lines.push(layoutTag + `\n  ></media-${layoutEl}-layout>`);

  lines.push(`</media-player>`);

  return lines;
}

function generateReactCode({ playerProps, layoutProps, hlsConfig, dashConfig }: Props) {
  const lines: string[] = [],
    { viewType } = playerProps,
    { type: layoutType, ...layoutAttrs } = layoutProps,
    hasPoster = playerProps.poster && layoutProps.type !== 'plyr',
    hasHLSConfig = !!Object.keys(hlsConfig).length,
    hasDASHConfig = !!Object.keys(dashConfig).length,
    hasProviderConfig = hasHLSConfig || hasDASHConfig,
    hasTracks = playerProps.textTracks?.length;

  lines.push(...generateStyleImports(layoutType));
  lines.push('');

  const imports = [
    'MediaPlayer',
    'MediaProvider',
    hasPoster && 'Poster',
    hasTracks && 'Track',
    hasHLSConfig && 'isHLSProvider',
    hasDASHConfig && 'isDASHProvider',
    hasProviderConfig && 'type MediaProviderAdapter',
  ].filter(Boolean);

  lines.push(`import { ${imports.join(', ')} } from "@vidstack/react"`);

  if (layoutType === 'plyr') {
    const imports = ['PlyrLayout', 'plyrLayoutIcons'];
    lines.push(`import { ${imports.join(', ')} } from '@vidstack/react/player/layouts/plyr';`);
  } else {
    const imports = [
      viewType === 'audio' && 'DefaultAudioLayout',
      viewType === 'video' && 'DefaultVideoLayout',
      'defaultLayoutIcons',
    ].filter(Boolean);

    lines.push(`import { ${imports.join(', ')} } from '@vidstack/react/player/layouts/default';`);
  }

  lines.push('');

  if (hasProviderConfig) {
    lines.push('function onProviderChange(provider: MediaProviderAdapter) {');

    if (hasHLSConfig) {
      lines.push(`  if (isHLSProvider(provider)) {`);
      lines.push(`    provider.config = ${stringify(hlsConfig).replace(/\n/g, '\n    ')}`);
      lines.push(`  }`);
    }

    if (hasDASHConfig) {
      if (hasHLSConfig) lines.push('');
      lines.push(`  if (isDASHProvider(provider)) {`);
      lines.push(`    provider.config = ${stringify(dashConfig).replace(/\n/g, '\n    ')}`);
      lines.push(`  }`);
    }

    lines.push(`}`);
    lines.push('');
  }

  let playerTag = `<MediaPlayer`,
    { textTracks, ...playerAttrs } = playerProps;

  playerTag += generateJSXAttrs(playerAttrs);
  if (hasProviderConfig) playerTag += generateJSXAttrs({ onProviderChange: 'onProviderChange' });

  lines.push(playerTag);
  lines.push('>');

  lines.push('  <MediaProvider>');

  if (hasPoster) {
    lines.push('    <Poster className="vds-poster" />');
  }

  if (hasTracks) {
    lines.push('    {textTracks.map(track => (');
    lines.push('      <Track {...track} key={track.src} />');
    lines.push('    ))}');
  }

  lines.push('  </MediaProvider>');

  let layoutTag =
    layoutType === 'plyr'
      ? `  <PlyrLayout`
      : viewType === 'audio'
        ? '  <DefaultAudioLayout'
        : '  <DefaultVideoLayout';

  layoutTag += generateJSXAttrs(layoutAttrs, 2);
  layoutTag += `\n    icons={${layoutType === 'plyr' ? 'plyrLayoutIcons' : 'defaultLayoutIcons'}}`;
  lines.push(layoutTag + '\n  />');

  lines.push('</MediaPlayer>');

  return lines;
}

function generateListeners(
  events: Record<string, any>,
  framework: PlayerDemoFramework = 'wc',
  indent = 1,
) {
  let listeners = '';

  const space = indent === 0 ? '' : '  '.repeat(indent);

  for (const type of Object.keys(events)) {
    listeners += `\n${space}`;
    if (framework === 'svelte') {
      listeners += `on:${type}={${events[type]}}`;
    } else if (framework === 'vue') {
      listeners += `@${type}="${events[type]}"`;
    } else if (framework === 'solid') {
      listeners += `on:${type}={${events[type]}}`;
    }
  }

  return listeners;
}

function generateAttrs(
  props: Record<string, any>,
  framework: PlayerDemoFramework = 'wc',
  indent = 1,
) {
  let attrs = '';

  const space = indent === 0 ? '' : '  '.repeat(indent);

  const attrNames: Record<string, string> = {
    autoPlay: 'autoplay',
    crossOrigin: 'crossorigin',
    playsInline: 'playsinline',
    preferNativeHLS: 'prefer-native-hls',
    minLiveDVRWindow: 'min-live-dvr-window',
  };

  for (const prop of Object.keys(props)) {
    attrs += `\n${space}`;

    const attr = attrNames[prop] ?? camelToKebabCase(prop),
      value = props[prop];

    if (framework === 'vue') {
      attrs += `.${prop}="${value}"`;
    } else if (framework === 'svelte' || framework === 'solid') {
      if (typeof value === 'boolean') {
        attrs += `${prop}`;
      } else if (typeof value === 'string') {
        attrs += `${prop}="${value}"`;
      } else {
        attrs += `${prop}={${value}}`;
      }
    } else if (typeof value === 'boolean') {
      attrs += `${attr}`;
    } else {
      attrs += `${attr}="${value}"`;
    }
  }

  return attrs;
}

function generateJSXAttrs(props: Record<string, any>, indent = 1) {
  let attrs = '';

  const space = indent === 0 ? '' : '  '.repeat(indent);

  for (const prop of Object.keys(props)) {
    attrs += `\n${space}`;

    const value = props[prop];

    if (prop.startsWith('on')) {
      attrs += `${prop}={${value}}`;
    } else if (typeof value === 'string') {
      attrs += `${prop}='${value}'`;
    } else if (typeof value === 'number') {
      attrs += `${prop}={${value}}`;
    } else if (typeof value === 'boolean') {
      attrs += prop;
    } else {
      attrs += `${prop}={${stringify(value).replace(/\n/g, `\n${space}`)}}`;
    }
  }

  return attrs;
}

function generateStyleImports(type: string, indent = 0) {
  const lines: string[] = [];

  const space = indent === 0 ? '' : '  '.repeat(indent);

  if (type === 'plyr') {
    lines.push(`${space}import 'vidstack/player/styles/base.css';`);
    lines.push(`${space}import 'vidstack/player/styles/plyr/theme.css';`);
  } else {
    lines.push(`${space}import '@vidstack/react/player/styles/default/theme.css';`);
    lines.push(`${space}import '@vidstack/react/player/styles/default/layouts/audio.css';`);
    lines.push(`${space}import '@vidstack/react/player/styles/default/layouts/video.css';`);
  }

  return lines;
}

function stringify(value: any, replacer?: ((key: string, value: any) => any) | null) {
  return JSON5.stringify(value, null, 2);
}
