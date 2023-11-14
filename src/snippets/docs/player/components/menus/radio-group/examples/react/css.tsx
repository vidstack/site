import { RadioGroup } from '@vidstack/react';

// @hl-start
function CustomRadioGroup() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <RadioGroup.Root className="media-radio-group" aria-label="Custom Options">
      {options.map((option) => (
        <RadioGroup.Item className="media-radio" value={option} key={option}>
          <span className="media-radio-check" />
          <span className="media-radio-label">{option}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
// @hl-end
