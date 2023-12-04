import { isVimeoProvider } from 'vidstack';

player.addEventListener('provider-change', (event) => {
  const provider = event.detail;

  if (isVimeoProvider(provider)) {
    provider.cookies = true;
    // Following applies to native controls.
    provider.title = false;
    provider.byline = false;
  }
});
