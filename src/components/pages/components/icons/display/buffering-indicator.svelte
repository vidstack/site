<script lang="ts">
  export let animate: boolean;
</script>

<svg class:animate width="37%" height="37%" fill="none" viewBox="0 0 120 120" aria-hidden="true">
  <circle cx="60" cy="60" r="54" stroke="currentColor" class="track"></circle>
  <circle
    cx="60"
    cy="60"
    r="54"
    stroke="currentColor"
    pathLength="100"
    stroke-dasharray="100"
    class="track-fill"
  ></circle>
</svg>

<style>
  .track {
    opacity: 0.4;
    stroke-width: 4;
  }

  .track-fill {
    color: var(--media-brand);
    opacity: 0.8;
    stroke-width: 4;
    stroke-dasharray: 100;
    stroke-dashoffset: 50;
  }

  svg.animate {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
