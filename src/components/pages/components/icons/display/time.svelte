<script lang="ts">
  import { IS_BROWSER } from '~/utils/env';
  import { onDestroy } from 'svelte';
  import { formatTime } from 'vidstack';

  export let animate: boolean;

  let seconds = 90,
    intervalId = -1;

  $: if (animate) {
    window.clearInterval(intervalId);
    intervalId = window.setInterval(() => {
      seconds += 1;
    }, 100);
  } else if (IS_BROWSER) {
    window.clearInterval(intervalId);
    intervalId = -1;
  }

  onDestroy(() => {
    window.clearInterval(intervalId);
  });
</script>

<span class="font-mono text-xl">{formatTime(seconds)}</span>
