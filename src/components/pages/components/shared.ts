import { IS_BROWSER } from '~/utils/env';
import { interpolateString } from 'd3-interpolate';
import { onMount, tick } from 'svelte';
import { cubicOut } from 'svelte/easing';
import { tweened, type TweenedOptions } from 'svelte/motion';
import { writable } from 'svelte/store';

export const componentSearchText = writable('');

export type ComponentLibrary = 'web-components' | 'react';

export const currentComponentLibrary = writable<ComponentLibrary>(getIconLibFromSearchParams());

export const componentLibraryOptions = ['Web Components', 'React'].map((label) => ({
  label,
  value: label.toLowerCase().replace(' ', '-') as ComponentLibrary,
}));

export function getIconLibFromSearchParams(): ComponentLibrary {
  if (!IS_BROWSER) return 'react';

  const searchParams = new URLSearchParams(location.search),
    lib = searchParams.get('lib');

  return isIconLibrary(lib) ? lib : 'react';
}

export function isIconLibrary(value?: string | null): value is ComponentLibrary {
  return value === 'web-components' || value === 'react';
}

export function useShouldDraw(animate: boolean, delay = 0) {
  let shouldDraw = writable(false);

  onMount(async () => {
    await tick();
    setTimeout(() => {
      shouldDraw.set(animate);
    }, delay);
  });

  return shouldDraw;
}

export function usePathMorph(
  pathA: string,
  pathB: string,
  animate: boolean,
  options?: TweenedOptions<string>,
) {
  const path = tweened(pathA, {
    interpolate: interpolateString,
    duration: 400,
    easing: cubicOut,
    ...options,
  });

  onMount(async () => {
    await tick();
    if (animate) path.set(pathB);
  });

  return path;
}
