

# Theme Icon

## Use case

Often we want to associate strings in our data with certain icons- for example, a tick for a data item with a status of `complete` and an alert for an item with a status of `failed`, as below.

<div class="ember-skeleton-styles">
  <div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
    <demo.example @name="basic-theme-icons" class="theme-icons-demo viewport">
      <div>{{svg/icons/icon-tick}} complete</div>
      <div>{{svg/icons/icon-alert}} failed</div>
    </demo.example>
    <demo.snippet @name="basic-theme-icons" />
  </DocsDemo>
</div>
</div>

But when using dynamic data, for example in the loop below, hard coding the path to the icon component doesn't work- notice how each icon below is a tick.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="theme-icons-dynamic-data" class="theme-icons-demo viewport">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {{#each this.model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{svg/icons/icon-tick}} {{person.status}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  </demo.example>
  <demo.snippet @name="theme-icons-dynamic-data" />
  <demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

## Basic usage

The `ember-skeleton/theme-icon` helper accepts a string as the first arguemnt (`person.status` in the example below), and a hash of key value pairs, where each key is a potential value of `person.status` and each value the path to a component. The helper returns the relevant path, and thus the correct icon component is displayed.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="theme-icons-hash" class="theme-icons-demo viewport">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {{#each this.model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{component (ember-skeleton/theme-icon person.status passed="svg/icons/icon-tick" failed="svg/icons/icon-alert")}}{{person.status}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  </demo.example>
  <demo.snippet @name="theme-icons-hash" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

Note the use of the contextual component syntax `{{component this....}}` is used above to render a component from a dynamic path. 

## Default options

It is likely that most icon/string associations will remain consistent throughout your app- for example that `passed` will always use the a tick and `failed` will always use the alert.

To avoid having to explicitly pass these associations to the helper every time it is used, a set of app wide defaults can be defined in `config/environment.js`.

<DocsSnippet @name="theme-icon-app-defaults.js" @language="javascript" @title="config/environment.js" />

The helper will check if the value of the first argument is present in any of the `matchStrings` arrays, and will return the corresponding `returnString`.

Note that you can set `fallback: true` on one of the objects. In this case, the returnString of that object will be returned if no matches are found. Note that this can be overriden by passing `fallback` to the helper as outlined below.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="default-theme-icons" class="theme-icons-demo viewport">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {{#each this.model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{component (ember-skeleton/theme-icon person.status)}}{{person.status}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>  
  </demo.example>
  <demo.snippet @name="default-theme-icons" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
  <demo.snippet @name="theme-icon-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

Note that where a key value pair passed directly to the helper conflicts with a default association, the default association will be overriden.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="theme-icon-overridden" class="theme-icons-demo viewport">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {{#each this.model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{component (ember-skeleton/theme-icon person.status failed="svg/icons/icon-info")}}{{person.status}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  </demo.example>
  <demo.snippet @name="theme-icon-overridden" @label="Template" @language="htmlbars" />
  <demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
  <demo.snippet @name="theme-icon-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

You can also pass a fallback string to the helper then invoking it. This will be returned by the helper if no other matches are found.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="theme-icons-default-fallback" class="theme-icons-demo viewport">
    <div>{{component (ember-skeleton/theme-icon "missing" fallback="svg/icons/icon-info")}}missing</div>
    </demo.example>
  <demo.snippet @name="theme-icons-default-fallback" @label="Template" @language="htmlbars" />
  <demo.snippet @name="theme-icon-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

If the string passed to the helper does not find any matches, and no fallback is given, the helper will return `null`.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="theme-icon-no-match" class="theme-icons-demo viewport">
      <div>{{component (ember-skeleton/theme-icon "info")}}info</div>
    </demo.example>
  <demo.snippet @name="theme-icon-no-match" @label="Template" @language="htmlbars" />
  <demo.snippet @name="theme-icon-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>