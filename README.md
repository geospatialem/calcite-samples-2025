# 2025 Calcite samples

_Looking for the 2022 samples? Navigate to the [calcite-samples](https://geospatialem.github.io/calcite-samples) site._

## Testing scope (n=82)

Please ensure testing is conducted for the following:

- Color contrast for light and dark modes per [1.4.3: Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)
- Text spacing per [1.4.12: Text Spacing (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html#test-rules)
- Mobile testing with VoiceOver (iOS) and TalkBack (Android)

## Samples

1. [Consistent focus with regions](/1-consistent-focus-regions/index.html): Consistent focus throughout an application, and interaction with actions and form controls that provide feedback with selection. **Out of scope**: The map.
   - `action`
   - `action-bar`
   - `action-pad`
   - `block`
   - `block-section`
   - `label`
   - `navigation`
   - `navigation-logo`
   - `panel`
   - `shell`
   - `shell-panel`
   - `slider`
   - `tooltip`
2. [Filter results with regions, pagination, and external links](/2-filter-results/index.html): Filter earthquakes and open a new window that displays the location of the earthquake. **Out of scope**: The new tab's contents.
   - `button`
   - `card`
   - `chip`
   - `filter`
   - `notice`
   - `pagination`
   - `panel`
   - `shell`
3. [Form validation](/3-form-validation/index.html): Form components, validation, completion status, and regions. **Out of scope**: Official form submission.
   - `alert`
   - `autocomplete`
   - `autocomplete-item`
   - `button`
   - `checkbox`
   - `combobox`
   - `combobox-item`
   - `input`
   - `input-date-picker`
   - `input-number`
   - `input-time-zone`
   - `label`
   - `meter`
   - `navigation`
   - `navigagion-logo`
   - `notice`
   - `option`
   - `progress`
   - `radio-button`
   - `radio-button-group`
   - `rating`
   - `segmented-control`
   - `segmented-control-item`
   - `select`
   - `shell`
   - `slider`
   - `switch`
   - `text-area`
   - `tooltip`
4. [Form elements](/4-form-elements/index.html): Form elements including `read-only` context. **Out of scope**: Official form submission, and switching between `calcite-menu-item`s, `"Profile"` and `"Feedback Survey"` in the `calcite-navigation`.
   - `accordion`
   - `accordion-item`
   - `chip`
   - `chip-group`
   - `dropdown-group`
   - `dropdown-item`
   - `inline-editable`
   - `input`
   - `input-number`
   - `input-text`
   - `input-time-picker`
   - `label`
   - `list`
   - `list-item`
   - `menu`
   - `menu-item`
   - `navigation`
   - `navigation-logo`
   - `navigation-user`
   - `popover`
   - `shell`
   - `split-button`
   - `tile`
   - `tile-group`
   - `tree`
   - `tree-item`
5. [Component demos](/5-component-demos/index.html): Standalone component demos that can be interacted with via a `calcite-chip-group`. **_Include `disabled` components scoped within the Shell demo._** **Out of scope**: Contents and context in each component upon selection. Also includes any `"Cancel"` or `"Proceed without saving"` buttons in `calcite-dialog`.
   - `block`
   - `button`
   - `chip`
   - `chip-group`
   - `dialog`
   - `fab`
   - `flow`
   - `flow-item`
   - `label`
   - `link`
   - `list`
   - `list-item`
   - `navigation`
   - `navigation-logo`
   - `panel`
   - `segmented-control`
   - `segmented-control-item`
   - `slider`
   - `sheet`
   - `shell`
   - `stepper`
   - `stepper-item`
   - `tab`
   - `tab-nav`
   - `tab-title`
   - `tabs`
   - `table`
   - `table-cell`
   - `table-header`
   - `table-row`
