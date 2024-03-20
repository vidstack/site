import { LocalMediaStorage } from '@vidstack/react';

class CustomLocalMediaStorage extends LocalMediaStorage {
  // override methods here...
}

// Provide storage to player.
<MediaPlayer storage={CustomLocalMediaStorage}>
