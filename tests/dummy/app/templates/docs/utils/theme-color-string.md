# Theme Color String

## Use case

In general, you should be using the <LinkTo @route="docs.helpers.theme-color-string">helper"</LinkTo> directly in your templates. The util should only be used when this is not possible.

For a general explanation of the use case, see <LinkTo @route="docs.helpers.theme-color-string">the helper docs"</LinkTo>.

## Import the util

<DocsSnippet @name="import-theme-color-string-util.js" />

## Basic usage

The `ember-skeleton/theme-color-string` util accepts a string as the first argument (`person.status` in the example below), and an object as the second argument, where each key is a potential value of `person.status` and each value is one of the defined theme colours. The helper returns the relevant theme colour, and thus, the badges below display correctly.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="util-bootstrap-badges-dynamic-data-basic" class="viewport">
<table>
<thead>
<tr>
<th>Name</th>
<th>Status</th>
</tr>
</thead>
<tbody>
{{#each this.parsedBasic as | person |}}
<tr>
<td>{{person.name}}</td>
<td><b class="badge badge-{{person.statusClass}}">{{person.status}}</b></td>
</tr>
{{/each}}
</tbody>
</table>
</demo.example>
<demo.snippet @name="theme-color-string-util-basic.js" @label="Controller" />
<demo.snippet @name="util-bootstrap-badges-dynamic-data-basic" @label="Template" @language="htmlbars" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

## Default options

It is likely that most colour/string associations will remain consistent throughout your app- for example that `passed` will always use the `success` colour and `failed` will always use the `danger` colour.

To avoid having to explicitly pass these associations to the helper every time it is used, a set of app wide defaults can be defined in `config/environment.js`, for example as below.

<DocsSnippet @name="theme-color-string-app-defaults.js" @language="javascript" @title="config/environment.js" />

The util will check if the value of the first argument is present in any of the `matchStrings` arrays, and will return the corresponsing `returnString`.

Note that you can set `fallback: true` on one of the objects. In this case, the returnString of that object will be returned if no matches are found. Note that this can be overriden by passing `fallback` to the util as outlined below.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="util-bootstrap-badges-dynamic-data-default-status" class="viewport">
<table>
<thead>
<tr>
<th>Name</th>
<th>Status</th>
</tr>
</thead>
<tbody>
{{#each this.parsedDefaults as | person |}}
<tr>
<td>{{person.name}}</td>
<td><b class="badge badge-{{person.statusClassDefault}}">{{person.status}}</b></td>
</tr>
{{/each}}
</tbody>
</table>
</demo.example>
<demo.snippet @name="theme-color-string-util-defaults.js" @label="Controller" />
<demo.snippet @name="util-bootstrap-badges-dynamic-data-default-status" @label="Template" @language="htmlbars" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>

Note that where a key value pair passed directly to the helper conflicts with a default association, the default association will be overriden.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="util-bootstrap-badges-dynamic-data-default-overridden" class="viewport">
<table>
<thead>
<tr>
<th>Name</th>
<th>Status</th>
</tr>
</thead>
<tbody>
{{#each this.defaultOverriden as | person |}}
<tr>
<td>{{person.name}}</td>
<td><b class="badge badge-{{person.statusClassDefaultOverridden}}">{{person.status}}</b></td>
</tr>
{{/each}}
</tbody>
</table>
</demo.example>
<demo.snippet @name="theme-color-string-util-default-overridden.js" @label="Controller" />
<demo.snippet @name="util-bootstrap-badges-dynamic-data-default-overridden" @label="Template" @language="htmlbars" />
<demo.snippet @name="names-and-statuses.js" @label="Model" @language="javascript" />
<demo.snippet @name="theme-color-string-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

You can also pass a fallback string to the helper then invoking it. This will be returned by the helper if no other matches are found.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="util-bootstrap-badges-dynamic-data-default-fallback" class="viewport">
<b class="badge badge-{{this.statusClassFallback}}">missing</b>
</demo.example>
<demo.snippet @name="theme-color-string-util-fallback.js" @label="Controller" />
<demo.snippet @name="util-bootstrap-badges-dynamic-data-default-fallback" @label="Template" @language="htmlbars" />
<demo.snippet @name="theme-color-string-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>

If the string passed to the helper does not find any matches, and no fallback is given, the helper will return the lowercased input string.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="util-theme-color-string-no-match" class="viewport">
<b class="badge badge-{{this.statusClassNoMatches}}">info</b>
<!--REUSLTS IN <b class="badge badge-info">info</b> -->
</demo.example>
<demo.snippet @name="theme-color-string-util-no-matches.js" @label="Controller" />
<demo.snippet @name="util-theme-color-string-no-match" @label="Template" @language="htmlbars" />
<demo.snippet @name="theme-color-string-app-defaults.js" @language="javascript" @label="config/environment.js" />
</DocsDemo>
</div>
