<script lang="ts">
  import { usePathMorph } from '../../shared';

  export let animate: boolean;

  const offPath = 'm13 19l9-7l-9-7v14zM2 19l9-7l-9-7v14z',
    onPath = 'm11 19l-9-7l9-7v14zm11 0l-9-7l9-7v14z',
    path = usePathMorph(offPath, onPath, animate);
</script>

<svg
  width="32%"
  height="32%"
  viewBox="0 0 24 24"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" stroke="currentColor" stroke-width="0.6" d={$path} />
</svg>
