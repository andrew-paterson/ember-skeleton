# Array join

Pass an array as the forst argument and the join string as the second. You can optionally pass the named arg `finalJoinString` to use a different join string for the final item.

## Simple use

<DocsDemo as |demo|>
  <demo.example @name="array-join.hbs">
    <h3>List of Parks and Rec characters</h3>
    {{ember-skeleton/array-join this.model.names " | "}}
  </demo.example>

  <demo.snippet @name="array-join.hbs" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names.js" @label="Model" @language="javascript" />
</DocsDemo>

## Custom `finalJoinString`

<DocsDemo as |demo|>
  <demo.example @name="array-join-custom-final.hbs">
    My favourte characters are {{ember-skeleton/array-join this.model.names ", " finalJoinString=" and "}}.
  </demo.example>

  <demo.snippet @name="array-join-custom-final.hbs" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names.js" @label="Model" @language="javascript" />
</DocsDemo>
