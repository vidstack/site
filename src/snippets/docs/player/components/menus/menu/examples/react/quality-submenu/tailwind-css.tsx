import { type ReactElement } from 'react';

import { Menu, useVideoQualityOptions } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  RadioButtonIcon,
  RadioButtonSelectedIcon,
  SettingsMenuIcon,
} from '@vidstack/react/icons';

// Re-use styles across other submenus.
const submenuClassName =
    'hidden w-full flex-col items-start justify-center outline-none data-[keyboard]:mt-[3px] data-[open]:inline-block',
  radioClassName =
    'ring-sky-400 group relative flex w-full cursor-pointer select-none items-center justify-start rounded-sm p-2.5 outline-none data-[hocus]:bg-white/10 data-[focus]:ring-[3px]',
  radioIconClassName = 'h-4 w-4 text-white group-data-[checked]:hidden',
  radioSelectedIconClassName = 'text-indigo-400 hidden h-4 w-4 group-data-[checked]:block';

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
      <Menu.Content className={submenuClassName}>
        <Menu.RadioGroup className="w-full flex flex-col" value={options.selectedValue}>
          {options.map(({ label, value, bitrateText, select }) => (
            <Menu.Radio className={radioClassName} value={value} onSelect={select} key={value}>
              <RadioButtonIcon className={radioIconClassName} />
              <RadioButtonSelectedIcon className={radioSelectedIconClassName} />
              {label}
              {bitrateText ? (
                <span className="text-[13px] text-gray-300 ml-auto">{bitrateText}</span>
              ) : null}
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
    <Menu.Button
      className="ring-sky-400 parent left-0 z-10 flex w-full cursor-pointer select-none items-center justify-start rounded-sm bg-black/60 p-2.5 outline-none ring-inset data-[open]:sticky data-[open]:-top-2.5 data-[hocus]:bg-white/10 data-[focus]:ring-[3px] aria-disabled:hidden"
      disabled={disabled}
    >
      <ChevronLeftIcon className="parent-data-[open]:block -ml-0.5 mr-1.5 hidden h-[18px] w-[18px]" />
      <Icon className="w-5 h-5 parent-data-[open]:hidden" />
      <span className="ml-1.5 parent-data-[open]:ml-0">{label}</span>
      <span className="ml-auto text-sm text-white/50">{hint}</span>
      <ChevronRightIcon className="parent-data-[open]:hidden ml-0.5 h-[18px] w-[18px] text-sm text-white/50" />
    </Menu.Button>
  );
}
