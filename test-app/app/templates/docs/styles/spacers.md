# Spacers

The SASS API allows you to define spacers, which are used to generate various classes. The defaults are:

<DocsSnippet @name="default-spacers.scss" @language="sass" />

A version of each class listed below is generated for each defined spacer.

    padding-{{this.spacer}}
    padding-y-{{this.spacer}}
    padding-x-{{this.spacer}}
    padding-top-{{this.spacer}}
    padding-right-{{this.spacer}}
    padding-bottom-{{this.spacer}}
    padding-left-{{this.spacer}}

    margin-{{this.spacer}}
    margin-y-{{this.spacer}}
    margin-x-{{this.spacer}}
    margin-top-{{this.spacer}}
    margin-right-{{this.spacer}}
    margin-bottom-{{this.spacer}}
    margin-left-{{this.spacer}}

    height-{{this.spacer}}
    width-{{this.spacer}}

    max-height-{{this.spacer}}
    max-width-{{this.spacer}}

## Padding examples

The padding is represented by the darker grey areas in the examples below.


<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="padding-xxl.hbs" class="padding-examples viewport">
    <div class="padding-xxl">
      <div>padding-xxl</div>
    </div>
  </demo.example>
  <demo.snippet @name="padding-xxl.hbs" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="padding-md.hbs" class="padding-examples viewport">
    <div class="padding-md">
      <div>padding-md</div>
    </div>
  </demo.example>
  <demo.snippet @name="padding-md.hbs" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="padding-x-xl.hbs" class="padding-examples viewport">
    <div class="padding-x-xl">
      <div>padding-x-xl</div>
    </div>
  </demo.example>
  <demo.snippet @name="padding-x-xl.hbs" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="padding-y-xl.hbs" class="padding-examples viewport">
    <div class="padding-y-xl">
      <div>padding-y-xl</div>
    </div>
  </demo.example>
  <demo.snippet @name="padding-y-xl.hbs" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="padding-left-xl.hbs" class="padding-examples viewport">
    <div class="padding-left-xl">
      <div>padding-left-xl</div>
    </div>
  </demo.example>
  <demo.snippet @name="padding-left-xl.hbs" />
</DocsDemo>
</div>

## Margin examples

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="margin-xl.hbs" class="margin-examples viewport">
    <div class="margin-xl">margin-xl</div>
    <div class="margin-xl">margin-xl</div>
    <div class="margin-xl">margin-xl</div>
  </demo.example>
  <demo.snippet @name="margin-xl.hbs" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="margin-sm.hbs" class="margin-examples viewport">
    <div class="margin-sm">margin-sm</div>
    <div class="margin-sm">margin-sm</div>
    <div class="margin-sm">margin-sm</div>
  </demo.example>
  <demo.snippet @name="margin-sm.hbs" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="margin-x-lg.hbs" class="margin-examples viewport">
    <div class="margin-x-lg">margin-x-lg</div>
    <div class="margin-x-lg">margin-x-lg</div>
    <div class="margin-x-lg">margin-x-lg</div>
  </demo.example>
  <demo.snippet @name="margin-x-lg.hbs" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="margin-y-lg.hbs" class="margin-examples vertical viewport">
    <div class="margin-y-lg">margin-y-lg</div>
    <div class="margin-y-lg">margin-y-lg</div>
    <div class="margin-y-lg">margin-y-lg</div>
  </demo.example>
  <demo.snippet @name="margin-y-lg.hbs" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="margin-bottom-lg-margin-right-lg.hbs" class="margin-examples viewport">
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
  </demo.example>
  <demo.snippet @name="margin-bottom-lg-margin-right-lg.hbs" />
</DocsDemo>
</div>

## Height, width, max-width and max-height examples

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="height-width-max-height-max-width.hbs" class="height-width-demo viewport"> 
      <div class="max-width-xxl height-xxl"></div>
  </demo.example>
  <demo.snippet @name="height-width-max-height-max-width.hbs" />
</DocsDemo>
</div>

## Extending spacers

Add additional spacers to the `$spacers` map in your `scss` code, *before* you import `ember-skeleton-variables`, and ten use in your templates as shown below.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="extending-spacers.hbs" class="height-width-demo viewport">
    <div class="padding-xxxl">
      <div class="height-xxxxl width-xxxxl"></div>
    </div>
  </demo.example>
  <demo.snippet @name="extending-spacer-values.scss" @label="scss" />
  <demo.snippet 
    @name="extending-spacers.hbs"
    @label="hbs"
    @language="htmlbars"
  />
</DocsDemo>
</div>


## Additional spacing classes

    margin-0

Sets margin to 0

    padding-0

Sets padding to 0

    width-100

Sets width to 100%

    last-child-margin-bottom-0

Sets bottom margin to 0, if the element is the past child.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="last-child-margin-bottom.hbs" class="last-child-margin-bottom-0-demo viewport">
    <div> 
      <div class="margin-bottom-xl last-child-margin-bottom-0">margin-bottom-xl last-child-margin-bottom-0</div>
      <div class="margin-bottom-xl last-child-margin-bottom-0">margin-bottom-xl last-child-margin-bottom-0</div>
      <div class="margin-bottom-xl last-child-margin-bottom-0">margin-bottom-xl last-child-margin-bottom-0</div>
    </div>
  </demo.example>
  <demo.snippet @name="last-child-margin-bottom.hbs" />
</DocsDemo>
</div>