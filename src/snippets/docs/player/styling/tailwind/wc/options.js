require('vidstack/tailwind.cjs')({
  // Optimize output by specifying player selector.
  selector: '.media-player',
  // Change the media variants prefix.
  prefix: 'media',
  // Enables more efficient selectors.
  webComponents: true,
});
