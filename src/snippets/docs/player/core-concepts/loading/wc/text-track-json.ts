import { type VTTContent } from 'vidstack';

const content: VTTContent = {
  cues: [
    { startTime: 0, endTime: 5, text: '...' },
    { startTime: 5, endTime: 10, text: '...' },
  ],
};

// Option 1. Provide JSON directly.
player.textTracks.add({
  type: 'json',
  label: 'English',
  kind: 'captions',
  language: 'en-US',
  content,
});

// Option 2. Load from a remote location.
player.textTracks.add({
  type: 'json',
  src: '/subs/english.json',
  // ...
});
