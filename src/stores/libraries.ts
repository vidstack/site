import Cookies from 'js-cookie';
import { writable } from 'svelte/store';

import { IS_BROWSER } from '../utils/env';

// We check other frameworks in this regex for the installation page.
const wcPathRE = /\/(wc|web\-c|angular|vue|svelte|cdn|solid)/;

export type JSLibrary = 'web-components' | 'react';

export const jsLibraries: JSLibrary[] = ['web-components', 'react'];

export const currentJSLibrary = writable<JSLibrary>(
  getJSLibraryFromPathname(IS_BROWSER ? location.href : undefined),
);

currentJSLibrary.subscribe((value) => {
  Cookies.set('js-lib', value, { secure: true, expires: 34560000, sameSite: 'lax' });
});

export function getJSLibraryFromPathname(pathname?: string): JSLibrary {
  if (!pathname) return 'react';
  return wcPathRE.test(pathname) ? 'web-components' : 'react';
}

export type CSSLibrary = 'css' | 'tailwind-css' | 'default-theme';

export const cssLibraries: CSSLibrary[] = ['css', 'tailwind-css', 'default-theme'];

export const currentCSSLibrary = writable<CSSLibrary>(
  getCSSLibraryFromPathname(IS_BROWSER ? location.href : undefined),
);

currentCSSLibrary.subscribe((value) => {
  Cookies.set('css-lib', value, { secure: true, expires: 34560000, sameSite: 'lax' });
});

export function getCSSLibraryFromPathname(pathname?: string): CSSLibrary {
  if (!pathname) return 'default-theme';

  const url = new URL(location.href),
    param = url.searchParams.get('styling');

  return param?.startsWith('tailwind') ? 'tailwind-css' : param === 'css' ? 'css' : 'default-theme';
}
