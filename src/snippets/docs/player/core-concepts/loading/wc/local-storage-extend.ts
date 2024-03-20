import { LocalMediaStorage } from 'vidstack';

class CustomLocalMediaStorage extends LocalMediaStorage {
  // override methods here...
}

// Provide storage to player.
player.storage = CustomLocalMediaStorage;
