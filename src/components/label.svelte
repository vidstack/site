<script lang="ts">
  import clsx from 'clsx';

  import InfoIcon from '~icons/lucide/info';

  export let label: string;
  export let info: string | null = null;

  let _class = '';
  export { _class as class };
</script>

<div class={clsx('flex items-center', _class)}>
  <div class="mb-1 flex items-center">
    <span
      class="shrink-0 whitespace-nowrap text-sm font-semibold text-soft group-focus-within:text-inverse"
    >
      {label}
    </span>

    {#if info}
      <a class="ml-2 hocus:text-inverse" href={info} aria-label="Learn more" target="_blank">
        <InfoIcon width={18} height={18} />
      </a>
    {/if}
  </div>
  <slot />
</div>
