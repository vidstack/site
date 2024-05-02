<script lang="ts">
  import GlyphText from '~/components/style/glyph-text.svelte';

  export let animate: boolean;
</script>

<GlyphText text="Title" {animate} />
