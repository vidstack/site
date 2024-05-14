export type SourcePresetType =
  | 'audio'
  | 'video'
  | 'live'
  | 'hls'
  | 'dash'
  | 'youtube'
  | 'vimeo'
  | 'custom';

export type LayoutType = 'default' | 'plyr';
export type PlayerProps = Record<string, any>;
export type LayoutProps = Record<string, any>;
export type TextTracks = Record<string, any>[];

export const sourcePresets = ['Audio', 'Video', 'HLS', 'DASH', 'Live', 'YouTube', 'Vimeo'];

export const spriteFight = {
  player: {
    title: 'Sprite Fight',
    poster: 'https://files.vidstack.io/sprite-fight/poster.webp',
    textTracks: [
      {
        src: 'https://files.vidstack.io/sprite-fight/subs/english.vtt',
        label: 'English',
        language: 'en-US',
        kind: 'subtitles',
        type: 'vtt',
        default: true,
      },
      {
        src: 'https://files.vidstack.io/sprite-fight/subs/spanish.vtt',
        label: 'Spanish',
        language: 'es-ES',
        kind: 'subtitles',
        type: 'vtt',
      },
      {
        src: 'https://files.vidstack.io/sprite-fight/chapters.vtt',
        language: 'en-US',
        kind: 'chapters',
        type: 'vtt',
        default: true,
      },
    ],
  },
  layout: {
    thumbnails: 'https://files.vidstack.io/sprite-fight/thumbnails.vtt',
  },
};

export const liveStream = {
  player: {
    title: 'Big Buck Bunnny',
    src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
    poster:
      'https://image.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM/thumbnail.webp?time=30',
  },
};

export function getSpriteFightSource(type: SourcePresetType) {
  switch (type) {
    case 'audio':
      return 'https://files.vidstack.io/sprite-fight/audio.mp3';
    case 'video':
      return 'https://files.vidstack.io/sprite-fight/720p.mp4';
    case 'hls':
      return 'https://files.vidstack.io/sprite-fight/hls/stream.m3u8';
    case 'dash':
      return 'https://files.vidstack.io/sprite-fight/dash/stream.mpd';
    case 'youtube':
      return 'youtube/_cMxraX_5RE';
    case 'vimeo':
      return 'vimeo/640499893';
  }
}
