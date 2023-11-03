import { useActiveTextCues, useActiveTextTrack } from '@vidstack/react';

const activeCaptions = useActiveTextTrack(['captions']),
  // Returns active `VTTCue[]` objects.
  activeCues = useActiveTextCues(activeCaptions);
