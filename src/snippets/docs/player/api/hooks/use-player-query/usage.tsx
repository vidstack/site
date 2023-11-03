import { usePlayerQuery } from '@vidstack/react';

const isMatch = usePlayerQuery('(width < 680) and (stream-type: on-demand)');
