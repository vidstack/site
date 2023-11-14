import { Menu } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { SettingsIcon } from '@vidstack/react/icons';

// @hl-start
<Menu.Root className="vds-menu">
  <Menu.Button className="vds-menu-button vds-button" aria-label="Settings">
    <SettingsIcon className="vds-rotate-icon vds-icon" />
  </Menu.Button>
  <Menu.Items className="vds-menu-items" placement="top" offset={0}>
    {/* Menu Items + Submenus */}
  </Menu.Items>
</Menu.Root>;
// @hl-end
