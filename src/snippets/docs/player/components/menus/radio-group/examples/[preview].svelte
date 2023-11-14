<media-radio-group class="vds-radio-group" value="value_one" aria-label="Radio Group Preview">
  <media-radio class="vds-radio" value="value_one">
    <span class="vds-radio-check" />
    <span class="vds-radio-label">Option 1</span>
  </media-radio>
  <media-radio class="vds-radio" value="value_two">
    <span class="vds-radio-check" />
    <span class="vds-radio-label">Option 2</span>
  </media-radio>
</media-radio-group>

<style>
  .vds-radio-group {
    --media-focus-ring: 0 0 0 3px rgb(78 156 246);
  }

  .vds-radio-check {
    border: 2px solid rgb(245 245 245 / 0.5);
  }

  :global(.vds-radio[aria-checked='true']) .vds-radio-check {
    border: 2px solid #f5f5f5;
  }

  :global(:root.light) .vds-radio-check {
    border: 2px solid rgb(41 41 41 / 0.5);
  }

  :global(:root.light .vds-radio[aria-checked='true']) .vds-radio-check {
    --media-menu-radio-check-active-color: black;
  }
</style>
