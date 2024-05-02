<script lang="ts">
  import RadioGroup from './radio-group.svelte';

  export let animate: boolean;
</script>

<RadioGroup
  items={[
    { name: 'The Forest', badge: '0:00' },
    { name: 'Camp Site', checked: true, badge: '0:30' },
    { name: 'The Sprites', badge: '01:30' },
  ]}
  {animate}
/>
