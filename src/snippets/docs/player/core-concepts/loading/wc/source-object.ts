// Example 1: Audio
const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
player.src = { src: audioStream, type: 'audio/object' };

// Example 2: Video
const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
player.src = { src: videoStream, type: 'video/object' };
