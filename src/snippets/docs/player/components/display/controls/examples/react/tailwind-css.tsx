<MediaPlayer>
  <MediaProvider />
  {/* @hl-start */}
  <Controls.Root className="data-[visible]:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity pointer-events-none">
    <Controls.Group className="pointer-events-auto w-full flex items-center px-2">
      Top Controls Group
    </Controls.Group>
    <div className="flex-1" />
    <Controls.Group className="pointer-events-auto w-full flex items-center px-2">
      Center Controls Group
    </Controls.Group>
    <div className="flex-1" />
    <Controls.Group className="pointer-events-auto w-full flex items-center px-2">
      Bottom Controls Group
    </Controls.Group>
  </Controls.Root>
  {/* @hl-end */}
</MediaPlayer>;
