<script lang="ts">
  import RadioGroup from './radio-group.svelte';

  export let animate: boolean;
</script>

<RadioGroup
  items={[{ name: 'English', checked: true, badge: 'CC' }, { name: 'Spanish' }, { name: 'German' }]}
  {animate}
/>
