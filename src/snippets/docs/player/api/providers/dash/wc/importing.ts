import DASH from 'dashjs';

player.addEventListener('provider-change', (event) => {
  const provider = event.detail;
  if (provider?.type === 'dash') {
    // Static import
    provider.library = DASH;
    // Or, dynamic import
    provider.library = () => import('dashjs');
  }
});
