import { type ReactElement } from 'react';

import { Menu, usePlaybackRateOptions } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, OdometerIcon } from '@vidstack/react/icons';

function SpeedSubmenu() {
  const options = usePlaybackRateOptions(),
    hint = options.selectedValue === '1' ? 'Normal' : options.selectedValue + 'x';
  return (
    <Menu.Root>
      <SubmenuButton label="Speed" hint={hint} disabled={options.disabled} icon={OdometerIcon} />
      <Menu.Content className="media-submenu">
        <Menu.RadioGroup className="media-radio-group" value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio className="media-radio" value={value} onSelect={select} key={value}>
              <CheckIcon className="media-radio-icon" />
              <span className="media-radio-label">{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

interface SubmenuButtonProps {
  label: string;
  hint: string;
  disabled?: boolean;
  icon: ReactElement;
}

function SubmenuButton({ label, hint, icon: Icon, disabled }: SubmenuButtonProps) {
  return (
    <Menu.Button className="media-submenu-button" disabled={disabled}>
      <ChevronLeftIcon className="media-submenu-close-icon" />
      <Icon className="media-submenu-icon" />
      <span className="media-submenu-label">{label}</span>
      <span className="media-submenu-hint">{hint}</span>
      <ChevronRightIcon className="media-submenu-open-icon" />
    </Menu.Button>
  );
}
