import Image from 'next/image';

import { Poster } from '@vidstack/react';

import poster from './poster.webp';

// See styling examples above.
<Poster asChild>
  <Image src={poster} width={1920} height={1080} alt="A description of my image." />
</Poster>;
