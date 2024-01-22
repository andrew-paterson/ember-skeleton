# Theme colours

This concept has been borrowed from Bootstrap. Many of the CSS classes available in the styles API are based on a map of theme colours, defined in the `$theme-colors` variable. The defaults are shown below.

<DocsSnippet @name="default-bootstrap-colours.scss" @language="sass" @title="Default theme colours" />

## Theme color CSS selectors

The Ember Skeleton `SASS` code will create multiple CSS style rules for each of the selectors listed below- one for each item in the `$theme-colors` map. See <LinkTo @route="docs.styles.theme-color-variants">Theme color variants"</LinkTo> for the full CSS API based on theme colours.

    .alert-*
    .badge-*
    .bg-*
    .text-*
    .list-group-item-*
    .fill-*
    .stroke-*
    .btn-*
    .btn-outline-*

## Button theme colours

If you don't want the full map of `$theme-colors` applied to buttons, you can define a buttons specific map and pass it to the variable `$button-theme-colors`. The format is the same a the `&theme-colors` variable.

This map of colours will then be used to generate the colour variants of the `.btn-*` and `.btn-outline-*` variants.

## Adding custom theme colors

Custom colours can be added to this map, by defining your own `$theme-colors` map _before_ importing `ember-skeleton-variables`.

<DocsSnippet @name="adding-cutom-bootstrap-colours.scss" @language="css" />

Note that the above code will add the colours to the default $theme-colors` map, rather than replace it.

The corresponding classes will then be avilable in your CSS. The below example shows bootstrap badges implemented with custom theme colours defined above.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="badge-custom-colour-variants.hbs" class="viewport">
    <div class="badge badge-twitter">badge-twitter</div>
    <div class="badge badge-facebook">badge-facebook</div>
    <div class="badge badge-tripadvisor">badge-tripadvisor</div>
    <div class="badge badge-reddit">badge-reddit</div>
  </demo.example>
  <demo.snippet @name="badge-custom-colour-variants.hbs" @label="Template" @language="htmlbars"/>
</DocsDemo>
</div>

## Bootstrap YIQ threshold

Some bootstrap components apply bootstrap colours tot he backgrounds of elements that will have text in theme- for example `.badge-*` and `.btn-*`. In order for such text to remain readable, it may need to be dark in some cases, and light in others.

Note that the Tripadvisor badge has dark text above, while the Reddit badge has white text.

Both a light and dark text color are defined by the `$yiq-text-dark` and `$yiq-text-light` variables.

The `$yiq-contrasted-threshold` variable is a measure of when a colour is light enough to require dark text on top of it. It can be anything from 0 to 255. The default is 160.

The higher this value is, the lighter a background is allowed to be, while still maintaining light text on top of it. Att 255 text will always be white, and at 0, text will always be dark.
