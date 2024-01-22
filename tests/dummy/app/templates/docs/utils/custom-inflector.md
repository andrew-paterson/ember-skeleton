# Custom Inflector

Determines whether the singular or plural version of a word should be used. Accepts a number as the first argument, ad a hash of the singular and plural versions of the work or phrase.

The plural version is optional- if not passed, the plural version of the phrase defaults to the singular version with 's' appended.

## Import the util

<DocsSnippet @name="import-custom-inflector-util.js" />

## Usage

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="custom-inflector-basic" class="viewport">
    <ul> 
      {{#each this.defaultPlural as |sentence|}}
        <li>{{sentence}}</li>
      {{/each}}
    </ul>
  </demo.example>
  <demo.snippet @name="custom-inflector-util-default-plural.js" @label="Controller" @language="javascript" />
  <demo.snippet @name="custom-inflector-basic" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-votes.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="custom-inflector-advanced" class="viewport">
    <ul> 
      {{#each this.customPlural as |sentence|}}
        <li>{{sentence}}</li>
      {{/each}}
    </ul>
  </demo.example>
  <demo.snippet @name="custom-inflector-util-custom-plural.js" @label="Template" @language="javascript" />
  <demo.snippet @name="names-and-votes.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>