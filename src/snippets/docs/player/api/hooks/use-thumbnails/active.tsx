import { useActiveThumbnail, useMediaState, useThumbnails } from '@vidstack/react';

const currentTime = useMediaState('currentTime'),
  thumbnails = useThumbnails('https://files.vidstack.io/sprite-fight/thumbnails.vtt'),
  activeThumbnail = useActiveThumbnail(thumbnails, currentTime);
