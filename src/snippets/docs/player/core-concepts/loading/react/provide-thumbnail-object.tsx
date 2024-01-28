// 1. Layouts.
<PlyrLayout thumbnails={storyboard} />
<DefaultVideoLayout thumbnails={storyboard} />

// 2. Thumbnail component.
<Thumbnail.Root src={storyboard}>...</Thumbnail.Root>

// 3. Hook
const thumbnails = useThumbnails(storyboard);

