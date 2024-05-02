<script lang="ts">
  import clsx from 'clsx';

  import { onMount } from 'svelte';

  let _class = '';
  export { _class as class };

  export let delay = 0;
  export let duration = 300;

  let started = false;

  onMount(() => {
    setTimeout(() => {
      started = true;
    }, delay);
  });

  $: blockTransition = clsx('transition-[opacity]', !started ? 'opacity-0' : 'opacity-100');

  $: squareTransition = clsx(
    'transition-[opacity,transform]',
    !started ? 'scale-x-[.25] opacity-0' : 'scale-x-100 opacity-100',
  );

  function onStart() {
    started = false;
    setTimeout(() => {
      started = true;
    }, duration);
  }
</script>

<svg
  role="img"
  class={_class}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  on:pointerenter={started ? onStart : null}
>
  <g
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
  >
    <rect
      width="7"
      height="7"
      x="14"
      y="3"
      rx="1"
      class={clsx(squareTransition, 'origin-bottom')}
      style={`transition-duration: ${duration * 2}ms`}
    />
    <path
      d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
      class={clsx(blockTransition, 'origin-bottom')}
      style={`transition-duration: ${duration}ms`}
    />
  </g>
</svg>
