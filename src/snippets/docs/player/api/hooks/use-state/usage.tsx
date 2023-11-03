import { useRef } from 'react';

import { TimeSlider, TimeSliderInstance, useState } from '@vidstack/react';

// Using TimeSlider as an example, many components expose state!
const timeSliderRef = useRef<TimeSliderInstance>(null),
  isDragging = useState(TimeSliderInstance, 'dragging', timeSliderRef);

<TimeSlider.Root ref={timeSliderRef} />;
