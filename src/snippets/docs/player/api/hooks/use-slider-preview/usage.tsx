import * as Slider from '@radix-ui/react-slider';
import { formatTime, useMediaState, useSliderPreview } from '@vidstack/react';

function CustomTimeSlider() {
  const duration = useMediaState('duration'),
    { previewRootRef, previewRef, previewValue } = useSliderPreview({
      clamp: true,
      offset: 6,
      orientation: 'horizontal',
    }),
    previewTime = (previewValue / 100) * duration;

  return (
    <Slider.Root ref={previewRootRef}>
      {/* ... */}
      <div ref={previewRef}>
        <span>{formatTime(previewTime)}</span>
      </div>
    </Slider.Root>
  );
}
