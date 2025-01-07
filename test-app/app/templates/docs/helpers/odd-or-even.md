# Odd or even

Accepts an integer as the first argument, and returns either `odd` or `even`.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="odd-or-even" class="viewport">
    <ul> 
      {{#each this.model as |person|}}
        <li>{{person.name}} has an <b>{{ember-skeleton/odd-or-even person.votes}}</b> number of votes.</li>
      {{/each}}
    </ul>
  </demo.example>
  <demo.snippet @name="odd-or-even" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-votes.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>
