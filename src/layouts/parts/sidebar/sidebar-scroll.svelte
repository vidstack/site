<script lang="ts">
  import { onMount } from 'svelte';

  import { scrollIntoCenter } from '../../../utils/scroll';

  onMount(() => {
    setTimeout(() => {
      const container = document.getElementById('main-sidebar')!.firstElementChild as HTMLElement,
        activeItem = container.querySelector('[data-active]');
      if (activeItem) {
        scrollIntoCenter(container, activeItem);
      }
    }, 0);
  });
</script>
