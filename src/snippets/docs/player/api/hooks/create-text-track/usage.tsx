import { createTextTrack } from '@vidstack/react';

// The track will be removed when component is unmounted.
const textTrack = createTextTrack({
  src: '/media/subs/english.vtt',
  kind: 'subtitles',
  label: 'English',
  language: 'en-US',
  type: 'vtt',
  default: true,
});
