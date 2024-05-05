<script lang="ts">
  import GlyphText from '~/components/style/glyph-text.svelte';

  export let animate: boolean;
</script>

<GlyphText class="font-mono text-lg tracking-widest text-soft/80" text="Title" {animate} />
