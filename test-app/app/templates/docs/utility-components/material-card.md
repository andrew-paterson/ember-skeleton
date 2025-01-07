# Material Card

Adds static classes to a component to give it rounded corners, large padding, a border and box shadow effect.

## Basic usage

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="material-card-basic.hbs" class="viewport">
<EmberSkeleton::MaterialCard>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</EmberSkeleton::MaterialCard>
</demo.example>
<demo.snippet @name="material-card-basic.hbs" />
</DocsDemo>
</div>

## Depth

The `depth` prop sets the depth of the box shadow based on the Google Material Design spec. The default is `1`, max is `5`.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="material-card-depth.hbs" class="viewport">
<EmberSkeleton::MaterialCard @depth={{1}} class="margin-bottom-lg">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</EmberSkeleton::MaterialCard>
    <EmberSkeleton::MaterialCard @depth={{2}} class="margin-bottom-lg">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </EmberSkeleton::MaterialCard>
    <EmberSkeleton::MaterialCard @depth={{3}} class="margin-bottom-lg">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </EmberSkeleton::MaterialCard>
    <EmberSkeleton::MaterialCard @depth={{4}} class="margin-bottom-lg">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </EmberSkeleton::MaterialCard>
    <EmberSkeleton::MaterialCard @depth={{5}} class="margin-bottom-lg">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </EmberSkeleton::MaterialCard>
</demo.example>
<demo.snippet @name="material-card-depth.hbs" />
</DocsDemo>
</div>

## Hover effect

If the `materialCardHoverEffect` prop is `true`, a hover effect will be applied when the user hovers over the card.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="material-card-hover.hbs" class="viewport">
<EmberSkeleton::MaterialCard @materialCardHoverEffect={{true}}>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</EmberSkeleton::MaterialCard>
</demo.example>
<demo.snippet @name="material-card-hover.hbs" />
</DocsDemo>
</div>

## Theme color integration

Uses the <LinkTo class="docs-md__a" @route="docs.styles.theme-colors">defined theme colours"</LinkTo> along with <LinkTo class="docs-md__a" @route="docs.helpers.theme-color-string">theme color string helper"</LinkTo> to apply a coloured borde to the car, based on the `borderColorProp`.

The simplest scenario is when `borderColorProp` is the name of one of the theme colours.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="material-card-theme-color-border.hbs" class="viewport">
<EmberSkeleton::MaterialCard @borderColorProp="danger">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</EmberSkeleton::MaterialCard>
</demo.example>
<demo.snippet @name="material-card-theme-color-border.hbs" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

The second scenario is where the `borderColorProp` is not one of the <LinkTo class="docs-md__a" @route="docs.styles.theme-colors">defined theme colours"</LinkTo>, but it is handled by the theme color string defaults in `config/environment.js`.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="material-card-theme-colors.hbs" class="viewport">
{{#each this.model as | person |}}
<EmberSkeleton::MaterialCard @borderColorProp={{person.status}} class="margin-bottom-lg">
{{person.name}} | {{person.status}}
</EmberSkeleton::MaterialCard>
{{/each}}
</demo.example>
<demo.snippet @name="material-card-theme-colors.hbs" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
<demo.snippet @name="theme-color-string-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

You can pass a hash of custom theme color string associations using the `themeColorStringHash` prop. Note that you can also pass `fallback="..."` to this hash to provide a fallback border color. See the <LinkTo class="docs-md__a" @route="docs.helpers.theme-color-string">theme color string helper docs"</LinkTo> for more.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="material-card-theme-custom-colors.hbs" class="viewport">
{{#each this.model as | person |}}
<EmberSkeleton::MaterialCard @borderColorProp={{person.status}} @themeColorStringHash={{hash
          passed="info"
          absent="gray-medium"
          failed="secondary"
        }} class="margin-bottom-lg">
{{person.name}} | {{person.status}}
</EmberSkeleton::MaterialCard>
{{/each}}
</demo.example>
<demo.snippet @name="material-card-theme-custom-colors.hbs" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

## Usage by class extension

You can make any component into a material card component by extending the material-card component class.

<DocsSnippet @name="material-card-class-extension">
import MaterialCard from 'ember-skeleton/components/ember-skeleton/material-card';

export default MaterialCard.extend({
...
});
</DocsSnippet>
