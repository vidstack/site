import { currentCSSLibrary, currentJSLibrary } from '~/stores/libraries';
import { IS_BROWSER } from '~/utils/env';
import { get, writable } from 'svelte/store';

export type JSSelection =
  | 'angular'
  | 'react'
  | 'svelte'
  | 'vue'
  | 'web-components'
  | 'cdn'
  | 'solid';

export type CSSSelection = 'css' | 'default-theme' | 'default-layout' | 'tailwind-css';

export type ProviderSelection = 'audio' | 'video' | 'hls' | 'youtube' | 'vimeo' | 'remotion';

export type BundlerSelection =
  | 'astro'
  | 'sveltekit'
  | 'nuxt'
  | 'solidstart'
  | 'vite'
  | 'webpack'
  | 'none';

export const videoProviders = new Set<ProviderSelection>(['hls', 'youtube', 'vimeo', 'remotion']);

export const selections = {
  js: writable<JSSelection>(initJSSelection()),
  css: writable<CSSSelection>(initCSSSelection()),
  provider: writable<ProviderSelection>('video'),
  bundler: writable<BundlerSelection>(initBundlerSelection()),
};

selections.js.subscribe((lib) => {
  if (lib) currentJSLibrary.set(lib === 'react' ? 'react' : 'web-components');

  if (lib !== 'react' && get(selections.provider) === 'remotion') {
    selections.provider.set('video');
  }
});

selections.css.subscribe((lib) => {
  lib &&
    currentCSSLibrary.set(
      lib === 'tailwind-css' ? 'tailwind-css' : lib.startsWith('default') ? 'default-theme' : 'css',
    );
});

selections.provider.subscribe((provider) => {
  if (provider === 'remotion') {
    selections.js.set('react');
    currentJSLibrary.set('react');
  }
});

function initJSSelection(): JSSelection {
  let pathname = IS_BROWSER ? location.pathname : undefined;

  if (!pathname) return 'react';

  pathname = pathname.replace(/\/$/, '');

  if (pathname.endsWith('angular')) {
    return 'angular';
  } else if (pathname.endsWith('svelte')) {
    return 'svelte';
  } else if (pathname.endsWith('vue')) {
    return 'vue';
  } else if (pathname.endsWith('web-components')) {
    return 'web-components';
  } else if (pathname.endsWith('cdn')) {
    return 'cdn';
  } else if (pathname.endsWith('solid')) {
    return 'solid';
  }

  return pathname.includes('docs/wc') ? 'web-components' : 'react';
}

function initCSSSelection(): CSSSelection {
  let href = IS_BROWSER ? location.href : undefined;

  if (!href) return 'default-layout';

  const url = new URL(href),
    param = url.searchParams.get('styling');

  return (param as CSSSelection) ?? 'default-layout';
}

function initBundlerSelection(): BundlerSelection {
  let href = IS_BROWSER ? location.href : undefined;

  if (!href) return 'none';

  const url = new URL(href),
    param = url.searchParams.get('bundler');

  return (param as BundlerSelection) ?? 'none';
}

export function getBundlerConfigFileName(bundler: BundlerSelection) {
  switch (bundler) {
    case 'astro':
      return 'astro.config.mjs';
    case 'sveltekit':
    case 'vite':
      return 'vite.config.js';
    case 'solidstart':
      return 'vite.config.ts';
    case 'nuxt':
      return 'nuxt.config.ts';
    case 'webpack':
      return 'webpack.config.js';
    default:
      return '';
  }
}
