<script lang="ts">
  import { IS_BROWSER } from '~/utils/env';
  import { onDestroy } from 'svelte';
  import { formatTime } from 'vidstack';

  export let animate: boolean;

  let seconds = 90,
    intervalId = -1;

  function stop() {
    window.clearInterval(intervalId);
    intervalId = -1;
  }

  $: if (animate) {
    stop();
    intervalId = window.setInterval(() => {
      seconds += 1;
    }, 100);
  } else if (IS_BROWSER) {
    stop();
  }

  onDestroy(stop);
</script>

<span class="font-mono text-xl">{formatTime(seconds)}</span>
