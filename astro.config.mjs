import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import AutoImport from 'astro-auto-import';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import icons from 'unplugin-icons/vite';

import codeHighlight from './plugins/code-highlight';
import codePreviews from './plugins/code-previews';
import codeSnippets from './plugins/code-snippets';
import { calloutAutoImport, mdxCallouts } from './plugins/mdx/components/callouts';
import { codeExamplesAutoImport, mdxCodeExamples } from './plugins/mdx/components/code-examples';
import { codeSnippetAutoImport, mdxCodeSnippets } from './plugins/mdx/components/code-snippet';
import { componentApiAutoImport, mdxComponentAPI } from './plugins/mdx/components/component-api';
import { mdxNo, noAutoImport } from './plugins/mdx/components/no';
import { mdxTable, tableAutoImport } from './plugins/mdx/components/table';
import { mdxYes, yesAutoImport } from './plugins/mdx/components/yes';
import { autolinkConfig } from './plugins/mdx/rehype-autolink-config';
import { externalLinksConfig } from './plugins/mdx/rehype-external-links-config';
import { rehypeOptimizeStatic } from './plugins/mdx/rehype-optimize-static';

const isLocal = !process.env.VERCEL;

export default defineConfig({
  site: 'https://vidstack.io',
  output: 'server',
  adapter: isLocal ? node({ mode: 'standalone' }) : vercel({ edgeMiddleware: true }),
  vite: {
    resolve: {
      alias: {
        '~astro-icons': '~icons',
      },
    },
    // Throwing some annoying type errors for src/snippets directory, just get rid of it for now.
    optimizeDeps: { noDiscovery: true, include: null },
    plugins: [codeHighlight(), codeSnippets(), codePreviews(), icons({ compiler: 'svelte' })],
  },
  experimental: {
    contentCollectionCache: true,
  },
  integrations: [
    AutoImport({
      imports: [
        codeSnippetAutoImport,
        codeExamplesAutoImport,
        calloutAutoImport,
        yesAutoImport,
        noAutoImport,
        tableAutoImport,
        componentApiAutoImport,
      ],
    }),
    mdxCodeSnippets(),
    mdxCodeExamples(),
    mdxCallouts(),
    mdxYes(),
    mdxNo(),
    mdxTable(),
    mdxComponentAPI(),
    tailwind(),
    svelte({ prebundleSvelteLibraries: false }),
    sitemap(),
    mdx(),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeSlug,
      // This adds links to headings
      [rehypeAutolinkHeadings, autolinkConfig],
      // Add rel and target attrs to external links
      [rehypeExternalLinks, externalLinksConfig],
      // Collapse static parts of the hast to html
      rehypeOptimizeStatic,
    ],
  },
  redirects: {
    '/docs': '/docs/player',
    '/docs/react': '/docs/player',
    '/docs/wc': '/docs/wc/player',
    ...['', 'react/']
      .flatMap((lib) => {
        const base = `/docs/${lib}player`;
        return {
          // Old site provider links.
          [`${base}/providers/audio`]: '/docs/player/api/providers/audio',
          [`${base}/providers/video`]: '/docs/player/api/providers/video',
          [`${base}/providers/hls`]: '/docs/player/api/providers/hls',
          // Old site styling links.
          [`${base}/core-concepts/styling`]: '/docs/player/styling/introduction',
          [`${base}/core-concepts/tailwind`]: '/docs/player/styling/tailwind',
          [`${base}/core-concepts/skins`]: '/docs/player/styling/responsive-design',
          // Old site installation links.
          [`${base}/getting-started/installation/audio`]:
            '/docs/player/getting-started/installation/web-components?provider=audio',
          [`${base}/getting-started/installation/hls`]:
            '/docs/player/getting-started/installation/web-components?provider=hls',
          [`${base}/getting-started/installation/react/audio`]:
            '/docs/player/getting-started/installation/react?provider=audio',
          [`${base}/getting-started/installation/react/video`]:
            '/docs/player/getting-started/installation/react?provider=video',
          [`${base}/getting-started/installation/cdn/audio`]:
            '/docs/player/getting-started/installation/cdn?provider=audio',
          [`${base}/getting-started/installation/cdn/video`]:
            '/docs/player/getting-started/installation/cdn?provider=video',
          [`${base}/getting-started/installation/cdn/hls`]:
            '/docs/player/getting-started/installation/cdn?provider=hls',
          // Old site component links.
          [`${base}/components/media/player`]: '/docs/player/components/core/player',
          [`${base}/components/media/outlet`]: '/docs/player/components/core/provider',
          [`${base}/components/media/gesture`]: '/docs/player/components/display/gesture',
          [`${base}/components/layout/controls`]: '/docs/player/components/display/controls',
          [`${base}/components/layout/poster`]: '/docs/player/components/display/poster',
          [`${base}/components/display/icon`]: '/docs/player/components/display/icons',
          [`${base}/components/display/live-indicator`]:
            '/docs/player/components/buttons/live-button',
        };
      })
      .reduce((p, c) => ({ ...p, ...c }), {}),
  },
});
