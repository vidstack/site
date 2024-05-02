<script lang="ts">
  import { usePathMorph } from '../../shared';

  export let animate: boolean;

  const onPath = 'M8 4.5v5H3m-1-6l6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3',
    offPath = 'M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4',
    path = usePathMorph(offPath, onPath, animate);
</script>

<svg
  width="30%"
  height="30%"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <g fill="none" stroke="currentColor" stroke-width="0.6">
    <path d={$path} />
    <rect width="10" height="7" x="12" y="13" rx="2" />
  </g>
</svg>
