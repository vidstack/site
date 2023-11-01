// Length
const hasItems = player.qualities.length;

// Index
const quality = player.qualities[0];

// Iterating
for (const quality of player.qualities) {
}

// Can be read-only if provider does not support setting quality:
const isReadonly = player.qualities.readonly;

// Automatic quality selection is enabled:
const isAutoSelect = player.qualities.auto;

// Map to array
player.qualities.toArray();
