import { RadioGroup } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { CheckIcon } from '@vidstack/react/icons';

// @hl-start
function CustomRadioGroup() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <RadioGroup.Root className="media-radio-group" aria-label="Custom Options">
      {options.map((option) => (
        <RadioGroup.Item className="media-radio" value={option} key={option}>
          <CheckIcon className="media-radio-icon" />
          <span className="media-radio-label">{option}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
// @hl-end
