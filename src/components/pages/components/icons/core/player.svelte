<script lang="ts">
  export let animate: boolean;
</script>

<svg
  class={animate ? 'animate' : ''}
  viewBox="0 0 24 24"
  width="35%"
  height="35%"
  fill="none"
  stroke="currentColor"
  stroke-width="0.6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="9" y="2" width="6" height="6" rx="1" />
  <path d="M12 12V8" />
  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
  <rect x="2" y="16" width="6" height="6" rx="1" />
  <rect x="16" y="16" width="6" height="6" rx="1" />
</svg>

<style>
  svg * {
    --i: 0;
    --duration: 100ms;
    animation-duration: var(--duration);
    animation-delay: calc(var(--i) * var(--duration));
    animation-timing-function: ease;
    transform-origin: center center;
  }

  svg.animate * {
    animation-name: animation;
    animation-fill-mode: both;
  }

  @keyframes animation {
    0% {
      opacity: 0;
      transform: scale(0.75);
    }

    100% {
      scale: 1;
      transform: scale(1);
    }
  }

  svg *:nth-child(2) {
    --i: 1;
  }
  svg *:nth-child(3) {
    --i: 2;
  }
  svg *:nth-child(4) {
    --i: 3;
  }
  svg *:nth-child(5) {
    --i: 4;
  }
</style>
