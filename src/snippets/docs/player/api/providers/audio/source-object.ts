const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
player.src = { src: audioStream, type: 'audio/object' };
