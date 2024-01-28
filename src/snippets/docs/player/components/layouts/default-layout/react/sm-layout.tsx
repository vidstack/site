import { type MediaPlayerQuery } from '@vidstack/react';
import { useCallback } from 'react';

const smallAudioLayoutQuery = useCallback<MediaPlayerQuery>(({ width }) => {
  return width < 576;
}, []);

const smallVideoLayoutQuery = useCallback<MediaPlayerQuery>(({ width, height }) => {
  return width < 576 || height < 380;
}, []);

<DefaultAudioLayout smallLayoutWhen={smallAudioLayoutQuery} />
<DefaultVideoLayout smallLayoutWhen={smallVideoLayoutQuery} />
