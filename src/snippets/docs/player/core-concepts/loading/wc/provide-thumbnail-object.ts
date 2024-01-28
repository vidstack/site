// 1. Layouts.
const videoLayout = document.querySelector('media-video-layout');
videoLayout.thumbnails = storyboard;

// 2. Thumbnail component.
const thumbnail = document.querySelector('media-thumbnail');
thumbnail.src = storyboard;
