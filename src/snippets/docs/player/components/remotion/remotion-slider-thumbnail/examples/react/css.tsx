import { TimeSlider } from '@vidstack/react';
import { RemotionSliderThumbnail } from '@vidstack/react/player/remotion';

// See the `TimeSlider` component for a complete example.
<TimeSlider.Root>
  {/* ... */}
  <TimeSlider.Preview>
    {/* @hl-start */}
    <RemotionSliderThumbnail className="media-slider-thumbnail" />
    {/* @hl-end */}
  </TimeSlider.Preview>
</TimeSlider.Root>;
