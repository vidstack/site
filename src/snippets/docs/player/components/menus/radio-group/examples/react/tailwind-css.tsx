import { RadioGroup } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { RadioButtonIcon, RadioButtonSelectedIcon } from '@vidstack/react/icons';

// @hl-start
function CustomRadioGroup() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <RadioGroup.Root className="w-full flex flex-col" aria-label="Custom Options">
      {options.map((option) => (
        <RadioGroup.Item
          className="ring-sky-400 group relative flex w-full cursor-pointer select-none items-center justify-start rounded-sm p-2.5 outline-none data-[hocus]:bg-white/10 data-[focus]:ring-[3px]"
          value={option}
          key={option}
        >
          <RadioButtonIcon className="h-4 w-4 text-white group-data-[checked]:hidden" />
          <RadioButtonSelectedIcon className="text-indigo-400 hidden h-4 w-4 group-data-[checked]:block" />
          {option}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
// @hl-end
