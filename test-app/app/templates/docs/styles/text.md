# Text 

## Font size on the body elemnet

Note that the `font-size` of the `body` element is hard coded to `62.5%` so that within the body element, `1em = 10px`. This makes it easy to use the superior `em` units to size fonts, while thinking of font sizes in pixels.

## Customising text

Any of the variables defined in `ember-skeleton/app/styles/ember-skeleton/variables/_text.scss` can be overriden to customise text design. All overrides must happen before you import `ember-skeleton-variables` in your `scss`.

## Body text

The `.body-text` class defines styles for the text that falls in the primary content areas of your layouts. This would typically exclude the header, footer and sidebar layouts, as you will likely want to style the text in these elements individually.

The `.body-text` class will be applied to any content wrapped in the `ember-skeleton/content-wrapper` component (See layouts), but the class can be added to any element. See `ember-skeleton/app/styles/ember-skeleton/generic/_text.scss` to see all elements that are affected when they are descendants of `.body-text`.

## Text align

The following classes apply the corresponding value to the `text-align` property.

    .text-align-left
    .text-align-center
    .text-align-right
    .text-align-justify

## Text smaller and text larger 

Default values (These can be overriden before importing `ember-skeleton-variables` in your scss.)

    $text-smaller-size: 0.9em !default;
    $text-larger-size: 1.2em !default;

In addition, the `.text-smaller` and `.text-larger` classes 

## Text column class

This class is added for use with long form text blocks, so that such blocks can be styled for maximum readability. The following variables can be overriden before importing `ember-skeleton-variables`.

<DocsSnippet @name="text-column-variables.scss" />

Note that `$text-column-justify-paragraph-min-width` defines the minimum screen width at which paragraphs inside `.text-column` must have their `text-align` property overridden to `justify`. If `null` the paragraphs will not have their `text-align` property overridden.

# Links

## no-underline class

If the class `no-underline` is added to any `a` element, it will not be underlined,in both normal or hover state.

## Faux link class 

The `.faux-link` class will apply all link styles to the element.