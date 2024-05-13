import type { MediaViewType } from 'vidstack';

import type { LayoutType, SourceType, TextTracks } from './media-player.svelte';

interface Props {
  framework: 'js' | 'wc' | 'react';
  layout: LayoutType;
  title: string;
  poster: string;
  src: string;
  srcType: any;
  thumbnails: string;
  theme: string;
  type: SourceType;
  viewType: MediaViewType;
  textTracks: TextTracks;
}

export function generateCode(props: Props) {
  const { framework, layout, viewType } = props;

  const lines: string[] = [];

  if (framework === 'wc') lines.push('<script>');

  if (layout === 'plyr') {
    lines.push(`import 'vidstack/player/styles/base.css';`);
    lines.push(`import 'vidstack/player/styles/plyr/theme.css';`);
  } else {
    lines.push(`import '@vidstack/react/player/styles/default/theme.css';`);
    lines.push(`import '@vidstack/react/player/styles/default/layouts/${viewType}.css';`);
  }

  lines.push('');

  if (framework === 'js') {
    lines.push(...generateJSCode(props));
  } else if (framework === 'wc') {
    lines.push(...generateWCCode(props));
  } else {
    lines.push(...generateReactCode(props));
  }

  return lines.join('\n');
}

function generateJSCode({
  src,
  srcType,
  title,
  poster,
  layout,
  thumbnails,
  theme,
  textTracks,
}: Props) {
  const lines: string[] = [];

  const layoutClass = layout === 'default' ? 'VidstackPlayerLayout' : 'PlyrLayout';

  lines.push(`import { VidstackPlayer, ${layoutClass} } from "vidstack/player"`);
  lines.push('');
  lines.push(`const player = await VidstackPlayer.create({`);

  lines.push(`  target: '#target',`);

  if (title) lines.push(`  title: '${title}',`);

  lines.push(`  src: ${!srcType ? `'${src}'` : `{ src: '${src}', type: '${srcType}' }`},`);

  if (poster) lines.push(`  poster: '${poster}',`);
  lines.push(`  layout: new ${layoutClass}({`);

  if (theme && layout === 'default') lines.push(`    colorScheme: '${theme}'`);
  if (thumbnails) lines.push(`    thumbnails: '${thumbnails}'`);

  lines.push(`  }),`);
  lines.push(`});`);

  if (textTracks.length) {
    for (const track of textTracks) {
      track.language = track.srclang;
      track.type = track['data-type'];
    }

    lines.push('');
    lines.push(
      `const tracks = ${JSON.stringify(
        textTracks,
        (key, value) => {
          if (key === 'srclang' || key.startsWith('data-')) return undefined;
          return value;
        },
        2,
      )};`,
    );
    lines.push('');

    lines.push(`for (const track of textTracks) {`);
    lines.push(`  player.textTracks.add(track);`);
    lines.push(`}`);
  }

  return lines;
}

function generateWCCode({
  title,
  src,
  srcType,
  poster,
  layout,
  viewType,
  textTracks,
  thumbnails,
  theme,
}: Props) {
  const lines: string[] = [];

  lines.push('</script>');

  let playerTag = '<media-player';
  if (title) playerTag += `\n  title="${title}"`;
  if (src && !srcType) playerTag += `\n  src="${src}"`;
  if (poster) playerTag += `\n  poster="${poster}"`;
  lines.push(playerTag + '\n>');

  lines.push(`  <media-provider>`);

  if (poster && layout === 'default' && viewType === 'video') {
    lines.push(`    <media-poster class="vds-poster"></media-poster>`);
  }

  if (srcType) {
    lines.push(`    <source src="${src}" type="${srcType}" />`);
  }

  for (const track of textTracks) {
    let html = '<track';
    for (const attr of Object.keys(track)) {
      const value = track[attr];
      if (typeof value === 'boolean') {
        html += ` ${attr}`;
      } else {
        html += ` ${attr}="${value}"`;
      }
    }
    lines.push(`    ${html} />`);
  }

  lines.push(`  </media-provider>`);

  const layoutEl = layout === 'default' ? viewType : 'plyr';

  let layoutTag = `  <media-${layoutEl}-layout`;
  if (thumbnails) layoutTag += `\n    thumbnails="${thumbnails}"`;
  if (layout === 'default' && theme) layoutTag += `\n    color-scheme="${theme}"`;
  lines.push(layoutTag + `\n  ></media-${layoutEl}-layout>`);

  lines.push(`</media-player>`);

  return lines;
}

function generateReactCode({ poster, layout }: Props) {
  const lines: string[] = [];

  const imports = ['MediaPlayer', 'MediaProvider', poster && layout !== 'plyr' && 'Poster'].filter(
    Boolean,
  );

  lines.push(`import { ${imports.join(', ')} } from "@vidstack/react"`);

  return lines;
}
