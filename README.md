# Vidstack Site

> [!IMPORTANT]
> **Vidstack Player is in security-only maintenance.** It gets priority security fixes until January 2028, and nothing else, so this site only changes to keep those docs accurate. The teams behind Vidstack, Plyr, Media Chrome, and Video.js now work on [Video.js 10](https://videojs.org?utm_source=vidstack).
>
> - **Migrate:** [React guide](https://videojs.org/docs/framework/react/guides/migrate-from-vidstack?utm_source=vidstack) · [Web components and other frameworks](https://videojs.org/docs/framework/html/guides/migrate-from-vidstack?utm_source=vidstack)
> - **With a coding agent:** paste the prompt from the guide's AI Quickstart section: [React](https://videojs.org/docs/framework/react/guides/migrate-from-vidstack?utm_source=vidstack#ai-quickstart) · [Web components and other frameworks](https://videojs.org/docs/framework/html/guides/migrate-from-vidstack?utm_source=vidstack#ai-quickstart)
> - **Security reports:** [vidstack/player SECURITY.md](https://github.com/vidstack/player/blob/main/SECURITY.md)
> - **More:** [the pinned maintenance issue](https://github.com/vidstack/player/issues/1868) and [a thank-you note](https://github.com/vidstack/player/discussions/1869)

This is the main Vidstack site and docs hosted at [vidstack.io][vidstack]. The site is built with
[Astro][astro], see their docs to get familiar with the framework.

## Quickstart

1. Install [PNPM][pnpm].
2. Clone repository: `git clone git@github.com:vidstack/site.git vidstack-site --depth=1`
3. Change directories and install dependencies: `cd vidstack-site && pnpm i`
4. Run development server: `npm run dev`

## Writing Docs

All documentation files can be found at [`src/content/docs`][content-docs]. They're written
using [MDX][astro-mdx] which is automatically supported by Astro.

### Sidebar Items

All pages that should be displayed in the docs sidebar need to be added to
the [docs sidebar items file][docs-sidebar-file].

### Frameworks Filter

You can filter content by framework by adding a special subdirectory (`wc/` or `react/`) at any path
inside [`src/content/docs`][content-docs]. For example:

- `src/content/docs/api/page.mdx`: This page will load when either the current JS library selection is
  Web Components or React and available at the URL `/docs/api/page` and `/docs/wc/api/page`.

- `src/content/docs/api/wc/page.mdx`: This page will load if the current JS library selection is
  "Web Components" and available at the URL `/docs/wc/api/page`.

- `src/content/docs/api/react/page.mdx`: This page will load if the current JS library selection is
  "React" and available at the URL `/docs/api/page`.

### MDX Directives

The following directives are included to help with writing docs in MDX files:

```mdx
:::info
This is a helpful info callout! The following callout types are supported: note, info, tip,
warning, danger, experimental.
:::

:::yes
Tell the user they should do this!
:::

:::no
Tell the user they should _not_ do this!
:::
```

### Code Snippets

All code snippets can be found at [`src/snippets`][code-snippets]. Vidstack supports
light/dark code themes and multiple frameworks with more to come, hence writing multiple code fences
in a file won't work as pages will bloat. Therefore, lazy loaded code snippets are used which we've
documented how to create and use below.

#### Code Snippet ID

The relative path from `src/snippets` without the file extension is the snippet ID. For example,
`src/snippets/docs/main.ts` has the snippet ID `docs/main`. The ID can be used to lazy load
the snippet via the `::code` directive in an MDX file like so:

```mdx
// Lazy load code snippet at `src/snippets/docs/main.ts`
::code[docs/main]

// Accepts following options
::code[docs/main]{title="Main Page" numbers=true copy=true flat=true highlights="1-3,5-8"}
```

You will need to provide the file extension if there are two snippets with the same name:

```mdx
::code[docs/main.ts]
::code[docs/main.css]
```

#### Relative Code Snippet ID

The snippet ID can be relative to the current URL path. For example, if you'd like to display a
snippet at the URL path `/docs/player/installation`, then a code file can be placed at
`src/snippets/docs/player/installation/foo.css` and loaded using the `::code` directive like so:

```mdx
// Loads the snippet with ID foo relative to current URL
::code[./foo]

// You can also walk up a directory from current URL
::code[../bar/foo]

// With extension
::code[../bar/foo.css]
```

#### Code Snippet Framework Filter

Similar to [content framework filters](#frameworks-filter), snippets can be placed inside
special framework subdirectories (`wc/` and `react/`) at any path inside `src/snippets` to be
displayed when the JS library selection is matched.

For example, `src/snippets/docs/player/installation/wc/foo` and
`src/snippets/docs/player/installation/react/foo` will both map to the snippet ID
`docs/player/installation/foo` and be selected based on the current JS library selection.

#### Code Snippet Highlighting

Option one is to include it as part of the `::code` directive options:

```mdx
// Highlight lines 1-3 and 5-8
::code[some/id]{highlights="1-3,5-8"}
```

Option two is to include highlight comment markers in the code snippet file like so:

```ts
import { foo } from 'bar';

// @hl-start
const a = 1;
// @hl-end
```

[pnpm]: https://pnpm.io/installation
[astro]: https://astro.build
[vidstack]: https://vidstack.io
[astro-mdx]: https://docs.astro.build/en/guides/markdown-content
[code-snippets]: ./src/snippets
[content-docs]: ./src/content/docs
[docs-sidebar-file]: ./src/layouts/nav/docs-sidebar-items.ts
