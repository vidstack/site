<script lang="ts">
  export let animate: boolean;
</script>

<div
  class="scale-105 rounded-sm border border-soft/80 px-3 py-1 font-mono text-sm tracking-wide"
  class:animate
>
  LIVE
</div>

<style>
  .animate {
    animation: color 250ms ease-in;
    animation-fill-mode: forwards;
  }

  @keyframes color {
    0% {
      background-color: rgb(var(--color-soft) / 20);
    }
    100% {
      color: white;
      background-color: rgb(220, 64, 7);
      border-color: transparent;
    }
  }
</style>
