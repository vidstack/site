import { useRef } from 'react';

import { TimeSlider, TimeSliderInstance, useStore } from '@vidstack/react';

// Using TimeSlider as an example, many components expose state!
const timeSliderRef = useRef<TimeSliderInstance>(null),
  { dragging, pointing, active } = useStore(TimeSliderInstance, timeSliderRef);

<TimeSlider.Root ref={timeSliderRef} />;
