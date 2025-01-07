# Box shadow mixin

The `box-shadow` mixin accepts two arguments- the position and opacity.

The default opacity is `0.16`.

There are 12 positions available:

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="box-shadow-mixin-examples.hbs" class="viewport">
    <div class="box-shadow-demo-top padding-lg margin-y-xl border">
      <code>@include .box-shadow(top)</code>
    </div>
    <div class="box-shadow-demo-bottom padding-lg margin-y-xl border">
      <code>@include .box-shadow(bottom)</code>
    </div>
    <div class="box-shadow-demo-left padding-lg margin-y-xl border">
      <code>@include .box-shadow(left)</code>
    </div>
    <div class="box-shadow-demo-right padding-lg margin-y-xl border">
      <code>@include .box-shadow(right)</code>
    </div>
    <div class="box-shadow-demo-topInset padding-lg margin-y-xl border">
      <code>@include .box-shadow(topInset)</code>
    </div>
    <div class="box-shadow-demo-bottomInset padding-lg margin-y-xl border">
      <code>@include .box-shadow(bottomInset)</code>
    </div>
    <div class="box-shadow-demo-leftInset padding-lg margin-y-xl border">
      <code>@include .box-shadow(leftInset)</code>
    </div>
    <div class="box-shadow-demo-rightInset padding-lg margin-y-xl border">
      <code>@include .box-shadow(rightInset)</code>
    </div>
    <div class="box-shadow-demo-bottomRight padding-lg margin-y-xl border">
      <code>@include .box-shadow(bottomRight)</code>
    </div>
    <div class="box-shadow-demo-topRight padding-lg margin-y-xl border">
      <code>@include .box-shadow(topRight)</code>
    </div>
    <div class="box-shadow-demo-bottomLeft padding-lg margin-y-xl border">
      <code>@include .box-shadow(bottomLeft)</code>
    </div>
    <div class="box-shadow-demo-topLeft padding-lg margin-y-xl border">
      <code>@include .box-shadow(topLeft)</code>
    </div>
  </demo.example>
  <demo.snippet @name="box-shadow-mixin-usage.scss" @label="scss" />
  <demo.snippet 
    @name="box-shadow-mixin-examples.hbs"
    @label="hbs"
    @language="htmlbars"
  />
</DocsDemo>
</div>

The mixin can be given a list of positions to add multiple box shadows to one element.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="box-shadow-mixin-multiple-examples.hbs" class="viewport">
    <div class="box-shadow-demo-multiple padding-lg margin-y-xl border">
      <code>@include box-shadow(topInset, rightInset, bottomInset, leftInset);</code>
    </div>
    </demo.example>
  <demo.snippet @name="box-shadow-mixin-mutliple.scss" @label="scss" />
  <demo.snippet 
    @name="box-shadow-mixin-multiple-examples.hbs"
    @label="hbs"
    @language="htmlbars"
  />
</DocsDemo>
</div>

Opacity can also be passed as the second argument. The default is `0.16`.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="box-shadow-mixin-opacity-examples.hbs" class="viewport">
    <div class="box-shadow-demo-bottomRight-opacity-10 padding-lg margin-y-xl border">
      <code>@include box-shadow(bottomRight, 0.1);</code>
    </div>
    <div class="box-shadow-demo-bottomRight-opacity-30 padding-lg margin-y-xl border">
      <code>@include box-shadow(bottomRight, 0.3);</code>
    </div>
    <div class="box-shadow-demo-bottomRight-opacity-50 padding-lg margin-y-xl border">
      <code>@include box-shadow(bottomRight, 0.5);</code>
    </div>
    <div class="box-shadow-demo-bottomRight-opacity-70 padding-lg margin-y-xl border">
      <code>@include box-shadow(bottomRight, 0.7);</code>
    </div>
    </demo.example>
  <demo.snippet @name="box-shadow-mixin-opacity.scss" @label="scss" />
  <demo.snippet 
    @name="box-shadow-mixin-opacity-examples.hbs"
    @label="hbs"
    @language="htmlbars"
  />
</DocsDemo>
</div>