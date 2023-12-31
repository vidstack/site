import { currentCSSLibrary, currentJSLibrary } from '~/stores/libraries';
import { animationFrameThrottle } from '~/utils/dom';
import { get } from 'svelte/store';

const updateLinks = animationFrameThrottle(() => {
  const jsLib = get(currentJSLibrary),
    cssLib = get(currentCSSLibrary);

  for (const anchor of document.querySelectorAll('a')) {
    // Do not mess with hashes.
    if (anchor.getAttribute('href')?.startsWith('#')) continue;

    const url = new URL(anchor.href);

    if (
      !url.pathname.startsWith('/docs') ||
      url.pathname.includes('getting-started/installation/')
    ) {
      continue;
    }

    if (url.pathname.includes('getting-started/installation')) {
      if (!url.searchParams.has('styling')) {
        url.searchParams.set('styling', 'default-layout');
      }
    } else {
      url.pathname = url.pathname.replace(
        /docs\/(wc\/)?/,
        `docs/${jsLib === 'react' ? '' : 'wc/'}`,
      );
      url.searchParams.set('styling', cssLib);
    }

    if (jsLib === 'web-components') {
      url.hash = url.hash
        .replace(/#(?:media)?(.*?)\.(.*?)/, '#$1.$2')
        .replace('.callbacks', '.events');
    } else {
      url.hash = url.hash
        .replace(/#(?:media)?(.*?)\.(.*?)/, '#media$1.$2')
        .replace('.events', '.callbacks');
    }

    anchor.href = url.href;
  }
});

window.addEventListener('DOMContentLoaded', () => {
  currentJSLibrary.subscribe(updateLinks);
  currentCSSLibrary.subscribe(updateLinks);
  document.addEventListener('astro:page-load', updateLinks);
});
