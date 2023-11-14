import { Menu } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { SettingsIcon } from '@vidstack/react/icons';

// @hl-start
<Menu.Root>
  <Menu.Button className="media-button" aria-label="Settings">
    <SettingsIcon className="media-rotate-icon" />
  </Menu.Button>
  <Menu.Items className="media-menu" placement="top" offset={0}>
    {/* Menu Items + Submenus */}
  </Menu.Items>
</Menu.Root>;
// @hl-end
