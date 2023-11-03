import { useRef } from 'react';

import { TimeSlider, useSliderStore, type TimeSliderInstance } from '@vidstack/react';

function Player() {
  const sliderRef = useRef<TimeSliderInstance>(null);

  const { dragging, pointing, active } = useSliderStore(sliderRef);

  // Can also be used on <Slider> and <VolumeSlider>
  <TimeSlider.Root ref={sliderRef}>{/* ... */}</TimeSlider.Root>;
}
