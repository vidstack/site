// 👀 Read snapshot of current state.
const { paused, playing, ... } = player.state;

// 🔔 Subscribe to media state updates.
const unsubscribe = player.subscribe(({ currentTime }) => {
  // ...
});
