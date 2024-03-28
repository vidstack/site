import { Menu } from '@vidstack/react';

<Menu.Root>
  <Menu.Button>{/* ... */}</Menu.Button>
  <Menu.Content className="media-menu">
    {/* @hl-start */}
    <Menu.Root>
      <Menu.Button>{/* ... */}</Menu.Button>
      <Menu.Content className="media-submenu">{/* ... */}</Menu.Content>
    </Menu.Root>
    {/* @hl-end */}
  </Menu.Content>
</Menu.Root>;
