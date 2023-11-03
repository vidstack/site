import { Menu, usePlaybackRateOptions } from '@vidstack/react';

function SpeedSubmenu() {
  const options = usePlaybackRateOptions(),
    hint = options.selectedValue === '1' ? 'Normal' : options.selectedValue + 'x';
  return (
    <Menu.Root>
      <Menu.Button disabled={options.disabled}>Speed ({hint})</Menu.Button>
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
