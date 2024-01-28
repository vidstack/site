<MediaPlayer>
  <MediaProvider>
    {tracks.map((track) => (
      <Track {...track} key={track.content} />
    ))}
  </MediaProvider>
</MediaPlayer>;
