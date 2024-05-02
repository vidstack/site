<script lang="ts">
  import { usePathMorph } from '../../shared';

  export let animate: boolean;

  const onPath = 'M17 7L7 17m10 0H7V7',
    offPath = 'M7 7h10v10M7 17L17 7',
    path = usePathMorph(offPath, onPath, animate);
</script>

<svg
  width="35%"
  height="35%"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <g fill="none" stroke="currentColor" stroke-width="0.6">
    <path d={$path} />
  </g>
</svg>
