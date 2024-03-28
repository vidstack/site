import { Menu, useAudioGainOptions } from '@vidstack/react';

function AudioGainSubmenu() {
  const options = useAudioGainOptions();
  return (
    <Menu.Root>
      <Menu.Button disabled={options.disabled}>Audio Boost</Menu.Button>
      <Menu.Content>
        <Menu.RadioGroup value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio value={value} onSelect={select} key={value}>
              {label}
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}
