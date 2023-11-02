// Prevent controls hiding while menu is being interacted with.
function onSettingsOpen(event: Event) {
  remote.pauseControls(event);
}

function onSettingsClose(event: Event) {
  remote.resumeControls(event);
}
