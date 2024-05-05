// 🔔 Subscribe to media state updates.
const { paused, playing, ... } = useMediaStore();

// 👀 Read state off player and avoid re-renders.
useEffect(() => {
  return player.subscribe(({ currentTime }) => {
    // ...
    return () => {
      // Cleanup here if needed.
    };
  });
}, []);
