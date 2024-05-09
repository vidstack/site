<script lang="ts">
  import clsx from 'clsx';

  import ExternalLinkIcon from '~astro-icons/lucide/external-link';

  import type { NavLink } from '../../../nav/nav-items';

  export let item: NavLink;
  export let pathname = '';

  const isExternal = !item.href.startsWith('/');
</script>

<!-- Link -->
<a
  class={clsx(
    'relative flex items-center rounded-md p-2 text-base',
    item.href === pathname
      ? 'font-medium text-brand underline'
      : 'text-soft hocus:text-inverse hocus:underline',
  )}
  href={item.href}
  target={isExternal ? '_blank' : null}
  rel={isExternal ? 'noreferrer' : null}
  {...$$restProps}
>
  {item.title}
  {#if isExternal}
    <ExternalLinkIcon class="ml-1" width={14} height={14} />
  {/if}
</a>
