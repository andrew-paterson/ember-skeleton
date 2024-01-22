# Humanise string

Accepts a string as the first argument.

Replaces underscores with spaces in the string, and applies one of three casing functions: 

* `sentenceCase (default)`
* `titleCase`
* `lowerCase`
* `upperCase`

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="humanise-string-basic" class="viewport">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Titlecase</th>
          <th>Lowercase</th>
          <th>Uppercase</th>
        </tr>
      </thead>
      <tbody>
        {{#each this.model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{ember-skeleton/humanise-string person.status}}</td>
            <td>{{ember-skeleton/humanise-string person.status "titleCase"}}</td>
            <td>{{ember-skeleton/humanise-string person.status "lowerCase"}}</td>
            <td>{{ember-skeleton/humanise-string person.status "upperCase"}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  </demo.example>
  <demo.snippet @name="humanise-string-basic" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-statuses-two.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>