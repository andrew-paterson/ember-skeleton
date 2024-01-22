# Array join

Pass an array as the first argument and the join string as the second. You can optionally pass the named arg `finalJoinString` to use a different join string for the final item.

## Example
<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="array-join" class="viewport">
    {{this.sentence}}
  </demo.example>
  <demo.snippet @name="array-join-util.js" @label="Controller" />
  <demo.snippet @name="array-join" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>
