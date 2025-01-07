# Deafult options

App wide options can be set in the `emberSkeletonOptions` object, which must be a child of in the `ENV` object in `config/environment.js`.

The defaults are as follows:

<DocsSnippet @name="addon-default-options.js" @language="javascript" />

Any additional settings can be added to the `emberSkeletonOptions` object. These are made available in the `options` property of the `emberSkeleton` service.

<DocsSnippet @name="options-in-service.js" @language="javascript" />

## Theme color string defaults

Allows you to define default settings for use by the <LinkTo class="docs-md__a" @route="docs.helpers.theme-color-string">`ember-skeleton/theme-color-string` helper</LinkTo>. The helper will check if the value of the first argument is present in any of the `matchStrings` arrays, and will return the corresponsing `returnString`.

<DocsSnippet @name="theme-color-string-app-defaults.js" @language="javascript" />

The above settings would allow the following three use cases.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="theme-color-string-default-badge.hbs" class="viewport">
<b class="badge badge-{{ember-skeleton/theme-color-string "passed"}}">passed</b>
<!-- OUTPUTS <b class="badge badge-success">passed</b>-->
<b class="badge badge-{{ember-skeleton/theme-color-string "absent"}}">absent</b>
<!-- OUTPUTS <b class="badge badge-warning">absent</b> -->
<b class="badge badge-{{ember-skeleton/theme-color-string "failed"}}">failed</b>
<!-- OUTPUTS <b class="badge badge-danger">failed</b> -->
</demo.example>
<demo.snippet @name="theme-color-string-default-badge.hbs" />
</DocsDemo>
</div>

## Theme icon defaults

Allows you to define default settings for use by the <LinkTo class="docs-md__a" @route="docs.helpers.theme-icon">`ember-skeleton/theme-icon-string` helper</LinkTo>. The helper will check if the value of the first argument is present in any of the `matchStrings` arrays, and will return the corresponsing `returnString`.

<DocsSnippet @name="theme-icon-app-defaults.js" @language="javascript" />

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
<demo.example @name="theme-icon-defaults-usage.hbs" class="theme-icons-demo viewport">
{{(component (ember-skeleton/theme-icon "passed"))}}
{{!-- OUTPUTS {{svg/icons/icon-tick}} --}}
{{(component (ember-skeleton/theme-icon "absent"))}}
{{!-- OUTPUTS  {{svg/icons/icon-alert}} --}}

</demo.example>
<demo.snippet @name="theme-icon-defaults-usage.hbs" />
</DocsDemo>
</div>
