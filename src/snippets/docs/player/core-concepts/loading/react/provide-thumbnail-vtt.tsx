// 1. Layouts.
<PlyrLayout thumbnails="/thumbnails.vtt" />
<DefaultVideoLayout thumbnails="/thumbnails.vtt" />

// 2. Thumbnail component.
<Thumbnail.Root src="/thumbnails.vtt">
  <Thumbnail.Img />
</Thumbnail.Root>

// 3. Hook.
const thumbnails = useThumbnails('/thumbnails.vtt');
