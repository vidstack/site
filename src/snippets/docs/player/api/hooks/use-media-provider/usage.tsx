import { useEffect } from 'react';

import { isHLSProvider, useMediaProvider } from '@vidstack/react';

const provider = useMediaProvider(); // `MediaProviderAdapter | null`

useEffect(() => {
  if (isHLSProvider(provider)) {
    // ...
  }
}, [provider]);
