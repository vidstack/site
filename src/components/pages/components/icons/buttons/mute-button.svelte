<script lang="ts">
  import { usePathMorph } from '../../shared';

  export let animate: boolean;

  const onPath = 'M11 5L6 9H2v6h4l5 4V5zm11 4l-6 6m0-6l6 6',
    offPath = 'M11 5L6 9H2v6h4l5 4V5zm4.54 3.46a5 5 0 0 1 0 7.07m3.53-10.6a10 10 0 0 1 0 14.14 ',
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
