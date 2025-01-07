# Theme Color String

## Use case

The styles documentation outlines how you can define a map of theme colours, which then generates classes for displaying a range of UI elements in any of the defined colours. See **Theme colours** and **Theme colour CSS selectors** in <LinkTo class="docs-md__a" @route="docs.styles">Styles"</LinkTo>.

Often we want to associate strings in our data with certain colours- for example, a green badge for a data item with a status of `complete` and a red badge for an item with a status of `failed`, as below.

<div class="ember-skeleton-styles">
  <div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
    <demo.example @name="bootstrap-badges" class="viewport">
      <div class="badge badge-success">complete</div>
      <div class="badge badge-warning">absent</div>
      <div class="badge badge-danger">failed</div>
    </demo.example>
    <demo.snippet @name="bootstrap-badges" />
  </DocsDemo>
</div>
</div>

With the badges above, the green and red backgrounds come form the `badge-success` and `badge-danger` classes respectively.

But when using dynamic data, for example in the loop below, hard coding the class of the badge doesn't work- notice how each status below appears in a green badge.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="bootstrap-badges-dynamic-data" class="viewport">
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
<td><b class="badge badge-success">{{person.status}}</b></td>
</tr>
{{/each}}
</tbody>
</table>
</demo.example>
<demo.snippet @name="bootstrap-badges-dynamic-data" />
</DocsDemo>
</div>

Likewise, simply passing in the status as he relevant part of the badge doesn't work, because there are no theme colours named `passed`, `failed` or `absent`.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="bootstrap-badges-dynamic-data-raw-status" class="viewport">
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
<td><b class="badge badge-{{person.status}}">{{person.status}}</b></td>
</tr>
{{/each}}
</tbody>
</table>
</demo.example>
<demo.snippet @name="bootstrap-badges-dynamic-data-raw-status" @label="Template" @language="htmlbars" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />

</DocsDemo>
</div>

## Basic usage

The `ember-skeleton/theme-color-string` helper accepts a string as the first argument (`person.status` in the example below), and a hash of key value pairs, where each key is a potential value of `person.status` and each value is one of the defined theme colours. The helper returns the relevant theme colour, and thus, the badges below display correctly.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="bootstrap-badges-dynamic-data-parsed-status" class="viewport">
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
<td><b class="badge badge-{{ember-skeleton/theme-color-string person.status complete="success" absent="warning" failed="danger"}}">{{person.status}}</b></td>
</tr>
{{/each}}
</tbody>
</table>
</demo.example>
<demo.snippet @name="bootstrap-badges-dynamic-data-parsed-status" @label="Template" @language="htmlbars" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

## Default options

It is likely that most colour/string associations will remain consistent throughout your app- for example that `passed` will always use the `success` colour and `failed` will always use the `danger` colour.

To avoid having to explicitly pass these associations to the helper every time it is used, a set of app wide defaults can be defined in `config/environment.js`, for example as below.

<DocsSnippet @name="theme-color-string-app-defaults.js" @language="javascript" @title="config/environment.js" />

The helper will check if the value of the first argument is present in any of the `matchStrings` arrays, and will return the corresponsing `returnString`.

Note that you can set `fallback: true` on one of the objects. In this case, the returnString of that object will be returned if no matches are found. Note that this can be overriden by passing `fallback` to the helper as outlined below.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="bootstrap-badges-dynamic-data-default-status" class="viewport">
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
<td><b class="badge badge-{{ember-skeleton/theme-color-string person.status}}">{{person.status}}</b></td>
</tr>
{{/each}}
</tbody>
</table>
</demo.example>
<demo.snippet @name="bootstrap-badges-dynamic-data-default-status" @label="Template" @language="htmlbars" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
<demo.snippet @name="theme-color-string-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

Note that where a key value pair passed directly to the helper conflicts with a default association, the default association will be overriden.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="bootstrap-badges-dynamic-data-default-overridden" class="viewport">
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
<td><b class="badge badge-{{ember-skeleton/theme-color-string person.status absent="info"}}">{{person.status}}</b></td>
</tr>
{{/each}}
</tbody>
</table>
</demo.example>
<demo.snippet @name="bootstrap-badges-dynamic-data-default-overridden" @label="Template" @language="htmlbars" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
<demo.snippet @name="theme-color-string-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

You can also pass a fallback string to the helper then invoking it. This will be returned by the helper if no other matches are found.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="bootstrap-badges-dynamic-data-default-fallback" class="viewport">
<b class="badge badge-{{ember-skeleton/theme-color-string "missing" fallback="primary"}}">missing</b>
</demo.example>
<demo.snippet @name="bootstrap-badges-dynamic-data-default-fallback" @label="Template" @language="htmlbars" />
<demo.snippet @name="theme-color-string-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

If the string passed to the helper does not find any matches, and no fallback is given, the helper will return the lowercased input string.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="theme-color-string-no-match" class="viewport">
<b class="badge badge-{{ember-skeleton/theme-color-string "info"}}">info</b>
<!--REUSLTS IN <b class="badge badge-info">info</b> -->
</demo.example>
<demo.snippet @name="theme-color-string-no-match" @label="Template" @language="htmlbars" />
<demo.snippet @name="theme-color-string-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>
