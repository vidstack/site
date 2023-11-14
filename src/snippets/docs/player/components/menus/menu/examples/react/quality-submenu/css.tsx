import { type ReactElement } from 'react';

import { Menu, useVideoQualityOptions } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { ChevronLeftIcon, ChevronRightIcon, SettingsMenuIcon } from '@vidstack/react/icons';

function QualitySubmenu() {
  const options = useVideoQualityOptions(),
    currentQuality = options.selectedQuality?.height,
    hint =
      options.selectedValue !== 'auto' && currentQuality
        ? `${currentQuality}p`
        : `Auto${currentQuality ? ` (${currentQuality}p)` : ''}`;
  return (
    <Menu.Root>
      <SubmenuButton
        label="Quality"
        hint={hint}
        disabled={options.disabled}
        icon={SettingsMenuIcon}
      />
      <Menu.Content className="media-submenu">
        <Menu.RadioGroup className="media-radio-group" value={options.selectedValue}>
          {options.map(({ label, value, bitrateText, select }) => (
            <Menu.Radio className="media-radio" value={value} onSelect={select} key={value}>
              <div className="media-radio-check" />
              <span className="media-radio-label">{label}</span>
              {bitrateText ? <span className="media-radio-hint">{bitrateText}</span> : null}
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
