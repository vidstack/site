<MediaPlayer
  src={[
    // Audio
    { src: 'https://files.vidstack.io/agent-327/audio.mp3', type: 'audio/mpeg' },
    { src: 'https://files.vidstack.io/agent-327/audio.ogg', type: 'audio/ogg' },
    // Video
    { src: 'https://files.vidstack.io/agent-327/720p.ogv', type: 'video/ogg' },
    { src: 'https://files.vidstack.io/agent-327/720p.avi', type: 'video/avi' },
    { src: 'https://files.vidstack.io/agent-327/720p.mp4', type: 'video/mp4' },
    // HLS
    {
      src: 'https://files.vidstack.io/agent-327/hls/stream.m3u8',
      type: 'application/x-mpegurl',
    },
  ]}
/>;
