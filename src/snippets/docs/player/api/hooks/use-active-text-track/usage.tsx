import { useActiveTextTrack } from '@vidstack/react';

const activeChaptersTrack = useActiveTextTrack('chapters');

// Multiple track kinds are supported.
const activeCaptionsTrack = useActiveTextTrack(['captions', 'subtitles']);
