import { useSliderStore } from '@vidstack/react';

// Can be called inside <Slider>, <VolumeSlider, <TimeSlider>
const { dragging, pointing, active } = useSliderStore();
