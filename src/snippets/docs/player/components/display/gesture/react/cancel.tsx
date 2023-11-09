import { Gesture, type GestureAction, type GestureWillTriggerEvent } from '@vidstack/react';

function onWillTrigger(action: GestureAction, nativeEvent: GestureWillTriggerEvent) {
  // Prevent the gesture from triggering.
  nativeEvent.preventDefault();
}

<Gesture onWillTrigger={onWillTrigger} />;
