<script lang="ts">
  import RadioGroup from './radio-group.svelte';

  export let animate: boolean;
</script>

<RadioGroup
  items={[{ name: '100%' }, { name: '200%' }, { name: '300%', checked: true }]}
  {animate}
/>
