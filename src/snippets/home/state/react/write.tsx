// Over 34 methods available!
const remote = useMediaRemote();

function onClick({ nativeEvent }: PointerEvent) {
  // Attaching trigger here to trace this play call back to this event.
  remote.play(nativeEvent);
}
