import { TimeSlider } from '@vidstack/react';
import { RemotionSliderThumbnail } from '@vidstack/react/player/remotion';

// See the `TimeSlider` component for a complete example.
<TimeSlider.Root>
  {/* ... */}
  <TimeSlider.Preview>
    {/* @hl-start */}
    <RemotionSliderThumbnail className="block w-[140px] aspect-video overflow-hidden border border-white bg-black" />
    {/* @hl-end */}
  </TimeSlider.Preview>
</TimeSlider.Root>;
