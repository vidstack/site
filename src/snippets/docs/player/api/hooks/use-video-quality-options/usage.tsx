import { Menu, useVideoQualityOptions } from '@vidstack/react';

function VideoQualitySubmenu() {
  const options = useVideoQualityOptions({ auto: true, sort: 'descending' }),
    currentQualityHeight = options.selectedQuality?.height,
    hint =
      options.selectedValue !== 'auto' && currentQualityHeight
        ? `${currentQualityHeight}p`
        : `Auto${currentQualityHeight ? ` (${currentQualityHeight}p)` : ''}`;
  return (
    <Menu.Root>
      <Menu.Button disabled={options.disabled}>Quality ({hint})</Menu.Button>
      <Menu.Content>
        <Menu.RadioGroup value={options.selectedValue}>
          {options.map(({ quality, label, value, bitrateText, select }) => (
            <Menu.Radio value={value} onSelect={select} key={value}>
              {label}
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}
