<script lang="ts">
  export let animate: boolean;
</script>

<svg
  class:animate
  width="35%"
  height="35%"
  viewBox="0 0 24 24"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="none" stroke="currentColor" stroke-width="0.5">
    <rect width="24" height="3" x="0" y="6" rx="0.5" />
    <rect width="24" height="3" x="0" y="12" rx="0.5" />
    <rect width="24" height="3" x="0" y="18" rx="0.5" />
  </g>
</svg>

<style>
  .animate rect {
    animation: stretch 1s ease-in-out infinite;
    transform-origin: center;
  }

  @keyframes stretch {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0.9);
    }
    100% {
      transform: scaleX(1);
    }
  }
</style>
