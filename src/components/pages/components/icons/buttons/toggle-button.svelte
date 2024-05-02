<script lang="ts">
  import { usePathMorph } from '../../shared';

  export let animate: boolean;

  const onPath = 'M20 6L9 17l-5-5',
    offPath = 'M18 6L6 18M6 6l12 12',
    path = usePathMorph(offPath, onPath, animate);
</script>

<svg
  width="30%"
  height="30%"
  viewBox="0 0 24 24"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" stroke="currentColor" stroke-width="0.6" d={$path} />
</svg>
