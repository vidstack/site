import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { codeToHtml, type BundledLanguage } from 'shiki';
import type { Plugin } from 'vite';

import { resolveCodeHighlights, snippetsMap, stripComments } from './code-snippets.js';

export default (): Plugin => {
  let dev = false;

  const fileToId = new Map(),
    highlightQueryRE = /\?highlight.*/;

  async function highlight(code: string, lang: string) {
    if (lang === 'cjs' || lang === 'mjs') lang = 'js';

    return await codeToHtml(/(j|t)sx/.test(lang) ? code.replace(/>;$/, '>') : code, {
      lang: lang as BundledLanguage,
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        {
          name: 'pre',
          pre(node) {
            node.properties.class += ' code-display not-prose min-h-full';
            node.properties['data-lang'] = lang;
            if (typeof node.properties.style === 'string') {
              node.properties.style = node.properties.style
                .replace(/background-color:.*?;/, '')
                .replace(/--shiki-dark.*?;?$/, '');

              if (!node.properties.style) {
                delete node.properties.style;
              }
            }
          },
          span(node) {
            if (typeof node.properties.style === 'string') {
              node.properties.style = node.properties.style.replace(/background-color:.*?;/, '');
            }
          },
        },
      ],
    });
  }

  return {
    name: '@vidstack/highlight',
    enforce: 'pre',
    async configResolved(config) {
      dev = config.mode === 'dev';
    },
    async resolveId(id, importer) {
      if (id.includes(':')) id = id.replace(/^.*\:/, ':');

      if (snippetsMap.has(id)) return id;
      if (id.startsWith(':code_snippet/')) return id;
      if (id.startsWith(':code_tokens/')) return id;

      if (highlightQueryRE.test(id)) {
        const resolvedFilePath = await this.resolve(id.replace(highlightQueryRE, ''), importer, {
          skipSelf: true,
        });

        if (!resolvedFilePath) return;

        const filePath = path.relative(process.cwd(), resolvedFilePath.id),
          ext = path.extname(filePath),
          // Replace . with ~ to prevent Vite trying to transform files.
          snippetId = `:code_snippet/${filePath.replace(ext, ext.replace('.', '~'))}`,
          content = await readFile(filePath, 'utf-8');

        snippetsMap.set(filePath, {
          filePath,
          ext,
          source: stripComments(content),
        });

        return snippetId;
      }
    },
    async load(id) {
      if (id.startsWith(':code_tokens/')) {
        id = id.replace(':code_tokens/', '');

        const snippetId = id.replace('~', '.'),
          snippet = snippetsMap.get(snippetId);

        if (!snippet) return;

        const { ext, source } = snippet;
        return `export default ${JSON.stringify(await highlight(source, ext.slice(1)))};`;
      }

      if (id.startsWith(':code_snippet/')) {
        id = id.replace(':code_snippet/', '');

        const snippetId = id.replace('~', '.'),
          snippet = snippetsMap.get(snippetId);

        if (!snippet) return;

        const { filePath, ext, source } = snippet;
        fileToId.set(filePath, `:code_snippet/${id}`);

        return `export default { ${[
          `source: ${JSON.stringify(source)}`,
          `code: { ${[`lang: "${ext.slice(1)}"`, `loader: () => import(":code_tokens/${id}")`].join(
            '\n, ',
          )} }`,
        ].join(',\n ')} };`;
      }

      return null;
    },
    async handleHotUpdate({ file, server }) {
      const relativeFilePath = path.relative(process.cwd(), file);

      if (fileToId.has(relativeFilePath)) {
        const id = fileToId.get(relativeFilePath),
          baseId = id.replace(`:code_snippet/`, ''),
          tokensId = `:code_tokens/${baseId}`,
          ext = path.extname(relativeFilePath);

        const content = await readFile(file, 'utf8'),
          lines = stripComments(content).split(/\n|\r/g).length - 1,
          highlights = resolveCodeHighlights(file, content);

        [
          server.moduleGraph.getModuleById(id),
          server.moduleGraph.getModuleById(tokensId),
          server.moduleGraph.getModuleById(tokensId + '?dark'),
        ].map((mod) => mod && server.moduleGraph.invalidateModule(mod));

        server.ws.send({
          type: 'custom',
          event: ':invalidate_code_snippet',
          data: {
            id: baseId,
            ext,
            lines,
            highlights,
            imports: {
              snippet: `/@id/${id}?t=${Date.now()}`,
              code: {
                loader: `/@id/${tokensId}?t=${Date.now()}`,
              },
            },
          },
        });
      }
    },
  };
};
