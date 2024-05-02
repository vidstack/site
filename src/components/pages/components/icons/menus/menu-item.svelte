<script lang="ts">
  export let animate: boolean;
</script>

<div
  class="flex w-[60%] items-center rounded-md border border-soft/20 bg-elevate px-2 py-1.5 dark:border-soft/40"
  class:animate
>
  <span class="font-mono text-xs">Item</span>
  <span class="flex-1"></span>
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" stroke-width="1" d="m9 18l6-6l-6-6" />
  </svg>
</div>
