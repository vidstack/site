import { useActiveThumbnail, useMediaState, useThumbnails } from '@vidstack/react';

const currentTime = useMediaState('currentTime'),
  thumbnails = useThumbnails('https://media-files.vidstack.io/thumbnails.vtt'),
  activeThumbnail = useActiveThumbnail(thumbnails, currentTime);
