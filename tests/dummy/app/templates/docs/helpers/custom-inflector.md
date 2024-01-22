# Custom Inflector

Determines whether the singular or plural version of a word should be used. Accepts a number as the first argument, ad a hash of the singular and plural versions of the work or phrase.

The plural version is optional- if not passed, the plural version of the phrase defaults to the singular version with 's' appended.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="custom-inflector-basic" class="viewport">
    <ul> 
      {{#each this.model as |person|}}
        <li>{{person.name}} has {{person.votes}} {{ember-skeleton/custom-inflector person.votes singular="vote"}}.</li>
      {{/each}}
    </ul>
  </demo.example>
  <demo.snippet @name="custom-inflector-basic" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-votes.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="custom-inflector-advanced" class="viewport">
    <ul> 
      {{#each this.model as |person|}}
        <li>{{person.name}} has been voted for {{ember-skeleton/custom-inflector person.votes singular="once" plural="several times"}}.</li>
      {{/each}}
    </ul>
  </demo.example>
  <demo.snippet @name="custom-inflector-advanced" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-votes.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>