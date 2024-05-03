<script lang="ts" context="module">
  import { getContext, setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  const key = Symbol.for('CDG');

  export interface Context {
    index: Writable<number>;
    length: Writable<number>;
  }

  export function useContext(): Context {
    return getContext(key);
  }
</script>

<script lang="ts">
  import ComponentDisplay from './component-display.svelte';

  export let items: Record<string, { id: string; title: string }[]>;

  setContext(key, {
    index: writable(0),
    length: writable(0),
  });
</script>

{#each Object.keys(items) as category}
  <ComponentDisplay {category} items={items[category]} />
{/each}
