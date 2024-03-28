import { type ReactElement } from 'react';

import { Menu, useAudioOptions } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, MusicIcon } from '@vidstack/react/icons';

function AudioSubmenu() {
  const options = useAudioOptions(),
    hint = options.selectedTrack?.label ?? 'Default';
  return (
    <Menu.Root>
      <SubmenuButton label="Audio" hint={hint} disabled={options.disabled} icon={MusicIcon} />
      <Menu.Content className="vds-menu-items">
        <Menu.RadioGroup className="vds-radio-group" value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio className="vds-radio" value={value} onSelect={select} key={value}>
              <CheckIcon className="vds-icon" />
              <span className="vds-radio-label">{label}</span>
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
    <Menu.Button className="vds-menu-item" disabled={disabled}>
      <ChevronLeftIcon className="vds-menu-close-icon" />
      <Icon className="vds-icon" />
      <span className="vds-menu-item-label">{label}</span>
      <span className="vds-menu-item-hint">{hint}</span>
      <ChevronRightIcon className="vds-menu-open-icon" />
    </Menu.Button>
  );
}
