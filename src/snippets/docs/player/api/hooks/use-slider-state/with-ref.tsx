import { useRef } from 'react';

import { TimeSlider, useSliderState, type TimeSliderInstance } from '@vidstack/react';

function Player() {
  const sliderRef = useRef<TimeSliderInstance>(null);

  const isDragging = useSliderState('dragging', sliderRef);

  // Can also be used on <Slider> and <VolumeSlider>
  <TimeSlider.Root ref={sliderRef}>{/* ... */}</TimeSlider.Root>;
}
