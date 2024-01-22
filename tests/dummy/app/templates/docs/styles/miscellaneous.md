# Miscellaneous classes

    .inline-block

Applies `display: inline-block` to the element.

    .position-relative

Applies `position: relative` to the element.

    .hidden

Applies `display: none` to the element.

    .bg-transparent

Applies `background-color: transparent` to the element.

    .hover-pointer 

The cursor will be a pointer on hover of the element.

    .monospace
  
Applies the font family assigned to the `$monospace-font-family` variable to the element. The default value is `"Lucida Console", Monaco, "Courier New", Courier, monospace`.

## Spinner

Any element with the classes `.spinner.on` will have a spinning animation.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="spinning-badge.hbs" class="viewport">
      <div class="spinner on badge badge-success">
        .spinner.on
      </div>
    </demo.example>
  <demo.snippet @name="spinning-badge.hbs" />
</DocsDemo>
</div>

## Other

All elements have `box-sizing: border-box`.

All elements with `role="button"` will have `cursor: pointer` in hover state.