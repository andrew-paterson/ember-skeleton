# Readable file size

Returns a human readable filesize, after receiving a number of bytes as the only argument.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="readable-file-size" class="viewport">
  {{#each this.model as |fileSize|}}
    {{ember-skeleton/readable-file-size fileSize}}<br>
  {{/each}}
  </demo.example>
  <demo.snippet @name="readable-file-size" />
  <demo.snippet @name="filesizes.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

## Rendering bug

Note that versions of Ember lower than 3.18.0 you get unexpected results with long integers, when the integer is passed directly into the helper. The bug does not occur when the argument is in a property as above.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="readable-file-size-bug" class="viewport">
    {{ember-skeleton/readable-file-size 2000000000}} (Should be 2.00GB)<br>
  </demo.example>
  <demo.snippet @name="readable-file-size-bug" />
</DocsDemo>
</div>

