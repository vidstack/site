import { type VTTContent } from '@vidstack/react';

const content: VTTContent = {
  cues: [
    { startTime: 0, endTime: 5, text: '...' },
    { startTime: 5, endTime: 10, text: '...' },
  ],
};

// Option 1. Provide JSON directly.
<Track content={content} label="English" kind="captions" lang="en-US" type="json" />;

// Option 2. Load from a remote location.
<Track src="/subs/english.json" ...  type="json" />;
