<script lang="ts">
  import clsx from 'clsx';

  export let animate: boolean;
</script>

<div
  class={clsx(
    'h-24 w-24 rounded-sm border border-soft/20 bg-elevate p-1 shadow-sm dark:border-soft/40',
    animate && 'animate-levitate',
  )}
></div>
