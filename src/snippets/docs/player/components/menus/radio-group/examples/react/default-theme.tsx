import { RadioGroup } from '@vidstack/react';

// @hl-start
function CustomRadioGroup() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <RadioGroup.Root className="vds-radio-group" aria-label="Custom Options">
      {options.map((option) => (
        <RadioGroup.Item className="vds-radio" value={option} key={option}>
          <span className="vds-radio-check" />
          <span className="vds-radio-label">{option}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
// @hl-end
