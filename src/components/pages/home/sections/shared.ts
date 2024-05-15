import { writable } from 'svelte/store';

export type JSFramework = 'js' | 'react' | 'wc';

export const jsFramework = writable<JSFramework>('react');
