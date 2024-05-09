import { writable } from 'svelte/store';

export const jsFramework = writable<'react' | 'wc'>('react');
