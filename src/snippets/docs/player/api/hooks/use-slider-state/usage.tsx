import { useSliderState } from '@vidstack/react';

// Can be called inside <Slider>, <VolumeSlider, <TimeSlider>
const isDragging = useSliderState('dragging');
