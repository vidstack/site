<script lang="ts">
  import SearchInput from '../../search-input.svelte';
  import { componentSearchText } from './shared';
</script>

<SearchInput placeholder="Search all components..." bind:value={$componentSearchText} />
