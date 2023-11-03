import { Menu, useChapterOptions } from '@vidstack/react';

function ChaptersMenu() {
  const options = useChapterOptions();
  return (
    <Menu.Root>
      <Menu.Button disabled={options.disabled}>Chapters</Menu.Button>
      <Menu.Content>
        <Menu.RadioGroup value={options.selectedValue}>
          {options.map(
            ({ cue, label, value, startTimeText, durationText, select, setProgressVar }) => (
              <Menu.Radio value={value} key={value} onSelect={select} ref={setProgressVar}>
                {/* ... */}
              </Menu.Radio>
            ),
          )}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}
