<script lang="ts">
  import RadioGroup from './radio-group.svelte';

  export let animate: boolean;
</script>

<RadioGroup
  items={[
    { name: '2160p', badge: 'UHD', checked: true },
    { name: '1080p', badge: 'HD' },
    { name: '720p', badge: 'HD' },
  ]}
  {animate}
/>
