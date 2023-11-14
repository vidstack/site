import { Menu } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { SettingsIcon } from '@vidstack/react/icons';

// @hl-start
<Menu.Root>
  <Menu.Button
    className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4"
    aria-label="Settings"
  >
    <SettingsIcon className="h-8 w-8 transform transition-transform duration-200 ease-out group-data-[open]:rotate-90" />
  </Menu.Button>
  <Menu.Items
    className="animate-out fade-out slide-out-to-bottom-2 data-[open]:animate-in data-[open]:fade-in data-[open]:slide-in-from-bottom-4 flex h-[var(--menu-height)] max-h-[400px] min-w-[260px] flex-col overflow-y-auto overscroll-y-contain rounded-md border border-white/10 bg-black/95 p-2.5 font-sans text-[15px] font-medium outline-none backdrop-blur-sm transition-[height] duration-300 will-change-[height] data-[resizing]:overflow-hidden"
    placement="top"
    offset={0}
  >
    {/* Menu Items + Submenus */}
  </Menu.Items>
</Menu.Root>;
// @hl-end
