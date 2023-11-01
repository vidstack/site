// Length
const hasItems = player.textTracks.length;

// Index
const track = player.textTracks[0];

// Get by ID
const track = player.textTracks.getById('...');

// Iterating
for (const track of player.textTracks) {
}

// Map to array
player.textTracks.toArray();
