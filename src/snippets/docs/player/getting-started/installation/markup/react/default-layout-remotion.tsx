<MediaPlayer
  title="video_title_here"
  src={{
    // Provide your React component here.
    src: RemotionVideo,
    type: 'video/remotion',
    compositionWidth: 1920,
    compositionHeight: 1080,
    fps: 30,
    durationInFrames: 1000,
    inputProps: {},
  }}
>
  <MediaProvider loaders={[RemotionProviderLoader]} />
  <DefaultVideoLayout icons={defaultLayoutIcons} />
</MediaPlayer>;
