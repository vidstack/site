<script lang="ts">
  import { usePathMorph } from '../../shared';

  export let animate: boolean;

  const onPath = 'm5 3l14 9l-14 9V3z',
    offPath = 'M6 4h4v16H6zm8 0h4v16h-4z',
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
