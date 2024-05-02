<script lang="ts">
  import RadioGroup from './radio-group.svelte';

  export let animate: boolean;
</script>

<RadioGroup
  items={[{ name: '0.5x' }, { name: 'Normal', checked: true }, { name: '1.5x' }]}
  {animate}
/>
