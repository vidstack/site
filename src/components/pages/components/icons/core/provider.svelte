<script lang="ts">
  export let animate: boolean;
</script>

<svg
  class={animate ? 'animate' : ''}
  width="40%"
  height="40%"
  viewBox="0 0 24 24"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  {#each [1, 2, 3, 4] as i}
    <rect
      fill={`rgb(var(--color-inverse)`}
      width="20px"
      height="0.8"
      x="2"
      y={7 + (i - 1) * 3}
      rx="1"
      ry="1"
      style={`--i: ${i}`}
    />
  {/each}
  <g fill="none" stroke="currentColor" stroke-width="0.4">
    <rect width="24" height="16" x="0" y="4" rx="1" ry="1" />
    <path d="m17 -4l-5 8l-3-5" />
  </g>
</svg>

<style>
  path {
    display: none;
  }

  .animate path {
    display: block;
    animation: antenna 400ms ease;
    animation-fill-mode: both;
    transform-origin: center center;
  }

  svg > rect {
    display: none;
  }

  .animate > rect {
    display: block;
    animation: flash 500ms linear infinite;
    animation-delay: calc(400ms + calc(var(--i) * 100ms));
    animation-fill-mode: both;
    transform-origin: center;
  }

  @keyframes flash {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 0.64;
      transform: scale(1);
    }
  }

  @keyframes antenna {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
