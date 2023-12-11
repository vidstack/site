<MediaPlayer
  title="video_title_here"
  src={{
    // Provide your React component here.
    src: RemotionVideo,
    type: 'video/remotion',
    durationInFrames: 1000,
    // The following are optional (defaults shown).
    compositionWidth: 1920,
    compositionHeight: 1080,
    fps: 30,
    initialFrame: 0,
    inFrame: null,
    outFrame: null,
    numberOfSharedAudioTags: 5,
    inputProps: {},
    renderLoading: () => null,
    errorFallback: () => null,
    onError(e) {
      // ...
    },
  }}
>
  <MediaProvider loaders={[RemotionProviderLoader]} />
</MediaPlayer>;
