import { Tooltip } from '@vidstack/react';

// @hl-start
<Tooltip.Root>
  <Tooltip.Trigger asChild>{/* Button */}</Tooltip.Trigger>
  <Tooltip.Content
    className="animate-out fade-out slide-out-to-bottom-2 data-[visible]:animate-in data-[visible]:fade-in data-[visible]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white border border-gray-400/20"
    placement="top start"
  >
    {/* Content */}
  </Tooltip.Content>
</Tooltip.Root>;
// @hl-end
