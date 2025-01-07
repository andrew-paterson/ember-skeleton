# Odd or even

Accepts an integer as the first argument, and returns either `odd` or `even`.

## Import the util

<DocsSnippet @name="import-odd-or-even-util.js" />

## Usage

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="odd-or-even" class="viewport">
    <ul> 
      {{#each this.oddOrEvenVotes as |sentence|}}
        <li>{{sentence}}</li>
      {{/each}}
    </ul>
  </demo.example>
  <demo.snippet @name="odd-or-even-util.js" @label="Controller" @language="javascript" />
  <demo.snippet @name="odd-or-even" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-votes.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>
