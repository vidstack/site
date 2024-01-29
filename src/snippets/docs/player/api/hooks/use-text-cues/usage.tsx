import { useActiveTextTrack, useTextCues } from '@vidstack/react';

const track = useActiveTextTrack('chapters'),
  // Returns `VTTCue[]` objects.
  cues = useTextCues(track);
