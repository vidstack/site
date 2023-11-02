const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
Player.src = { src: videoStream, type: 'video/object' };
