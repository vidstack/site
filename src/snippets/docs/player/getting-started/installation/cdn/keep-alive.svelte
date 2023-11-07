<script>
  const player = document.querySelector('media-player');

  function onDestroy() {
    // This call will destroy the player and all child instances.
    // @hl-start
    player.destroy();
    // @hl-end
  }
</script>

<!-- `keep-alive` is forwarded to all child components. -->
<!-- @hl-start -->
<media-player keep-alive>
  <!-- @hl-end -->
  <!-- ... -->
</media-player>
