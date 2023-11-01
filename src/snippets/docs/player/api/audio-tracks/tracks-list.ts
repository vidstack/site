// Length
const hasItems = player.audioTracks.length;

// Index
const track = player.audioTracks[0];

// Get by ID
const track = player.audioTracks.getById('...');

// Iterating
for (const track of player.audioTracks) {
}

// Map to array
player.audioTracks.toArray();
