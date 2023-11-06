import previews from ':code_previews';
import { readonly, writable } from 'svelte/store';

const store = writable(previews);

export const codePreviews = readonly(store);
