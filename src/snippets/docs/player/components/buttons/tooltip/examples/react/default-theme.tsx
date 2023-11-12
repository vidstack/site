import { Tooltip } from '@vidstack/react';

// @hl-start
<Tooltip.Root>
  <Tooltip.Trigger asChild>{/* Button */}</Tooltip.Trigger>
  <Tooltip.Content className="vds-tooltip-content" placement="top start">
    {/* Content */}
  </Tooltip.Content>
</Tooltip.Root>;
// @hl-end
