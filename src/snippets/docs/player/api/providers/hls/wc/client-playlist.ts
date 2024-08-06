const playlist = [
  '#EXTM3U',
  '#EXT-X-VERSION:4',
  '#EXT-X-PLAYLIST-TYPE:VOD',
  '',
  '#EXT-X-STREAM-INF:RESOLUTION=1920x1080',
  'https://files.vidstack.io/sprite-fight/hls/1080p/stream.m3u8',
  '',
  '#EXT-X-STREAM-INF:RESOLUTION=1280x720',
  'https://files.vidstack.io/sprite-fight/hls/720p/stream.m3u8',
].join('\n');

const blob = new Blob([playlist], {
  type: 'application/x-mpegurl',
});

player.src = {
  src: URL.createObjectURL(blob),
  type: 'application/x-mpegurl',
};
