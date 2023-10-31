import {
  MediaPlayer,
  MediaProvider,
  useMediaState,
  // ...
} from '@vidstack/react';

function MyPlayer() {
  return (
    <MediaPlayer>
      {/* This component is where the video canvas will be rendered. */}
      <MediaProvider />
      <CustomVideoLayout />
    </MediaPlayer>
  );
}

// Pick, compose, arrange, and style player components to build your layout.
function CustomVideoLayout() {
  const viewType = useMediaState('viewType'),
    streamType = useMediaState('streamType');

  // If we have multiple layouts based on view/stream type we can skip rendering.
  if (viewType !== 'video' || streamType !== 'on-demand') return null;

  return (
    <>
      <Captions className="..." />
      <Controls.Root className="...">
        <Controls.Group className="...">
          <TimeSlider.Root className="...">{/* ... */}</TimeSlider.Root>
        </Controls.Group>
        <Controls.Group className="...">
          <PlayButton className="...">{/* ... */}</PlayButton>
          <MuteButton className="...">{/* ... */}</MuteButton>
          <VolumeSlider.Root className="...">{/* ... */}</VolumeSlider.Root>
          {/* ... */}
        </Controls.Group>
      </Controls.Root>
    </>
  );
}
