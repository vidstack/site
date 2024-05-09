<script lang="ts">
  import clsx from 'clsx';

  export let label: string | null = null;
  export let value: string;
  export let placeholder: string | null = null;
</script>

<div class="group flex w-full flex-col items-start">
  <input
    class={clsx(
      'font-base border-b-2 text-sm text-soft/60 outline-none focus:border-brand focus:text-inverse',
      'mt-2 block w-full appearance-none border-border/90 pb-1 transition-colors duration-200',
      'placeholder:text-soft/40',
    )}
    type="text"
    {placeholder}
    bind:value
    on:change
    style="background: none; box-shadow: none;"
    aria-label={label}
  />
</div>
