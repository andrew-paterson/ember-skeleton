# Robotise string

Accepts a string as the first argument, and a separator as an optional second argument, which defaults to `_` if absent. `

## Example
<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="robotise-string" class="viewport">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Custom separator</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{this.nameVersions.unchanged}}</td>
          <td>{{this.nameVersions.default}}</td>
          <td>{{this.nameVersions.customSeparator}}</td>
        </tr>
      </tbody>
    </table>
  </demo.example>
  <demo.snippet @name="robotise-string-util.js" @label="Controller" />
  <demo.snippet @name="robotise-string" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>