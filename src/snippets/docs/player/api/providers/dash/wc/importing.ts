import DASH from 'dashjs';
import {isDASHProvider} from 'vidstack'

player.addEventListener('provider-change', (event) => {
  const provider = event.detail;
  if (isDASHProvider(provider)) {
    // Static import
    provider.library = DASH;
    // Or, dynamic import
    provider.library = () => import('dashjs');
  }
});
