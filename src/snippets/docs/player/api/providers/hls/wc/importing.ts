import HLS from 'hls.js';
import {isHLSProvider} from 'vidstack'

player.addEventListener('provider-change', (event) => {
  const provider = event.detail;
  if (isHLSProvider(provider)) {
    // Static import
    provider.library = HLS;
    // Or, dynamic import
    provider.library = () => import('hls.js');
  }
});
