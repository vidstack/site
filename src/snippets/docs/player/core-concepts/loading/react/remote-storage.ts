import { type MediaStorage } from '@vidstack/react';

class MediaDatabaseStorage implements MediaStorage {
  async getVolume() {}
  async setVolume(volume: number) {}

  async getMuted() {}
  async setMuted(isMuted: boolean) {}

  async getTime() {}
  async setTime(time: number) {}

  async getLang() {}
  async setLang(lang: string | null) {}

  async getCaptions() {}
  async setCaptions(isOn: boolean) {}

  async onLoad() {}

  onChange(src, mediaId, playerId) {}

  onDestroy() {}
}
