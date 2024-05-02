<script lang="ts">
  export let animate: boolean;
</script>

<div class="sound flex scale-150 items-center space-x-1" class:animate>
  <div class="h-2 w-px rounded-md bg-soft/80 group-hover:bg-inverse" />
  <div class="h-5 w-px rounded-md bg-soft/80 group-hover:bg-inverse" />
  <div class="h-7 w-px rounded-md bg-soft/80 group-hover:bg-inverse" />
  <div class="h-4 w-px rounded-md bg-soft/80 group-hover:bg-inverse" />
  <div class="h-6 w-px rounded-md bg-soft/80 group-hover:bg-inverse" />
  <div class="h-3 w-px rounded-md bg-soft/80 group-hover:bg-inverse" />
</div>

<style>
  .sound.animate > * {
    animation: wave 800ms linear infinite;
  }

  @keyframes wave {
    25% {
      transform: scaleX(0.8) scaleY(0.5);
    }
    50% {
      transform: scaleX(1) scaleY(0.8);
    }
    75% {
      transform: scaleX(0.8) scaleY(0.64);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }
</style>
