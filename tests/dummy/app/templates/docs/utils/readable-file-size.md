# Readable file size

Returns a human readable filesize, after receiving a number of bytes as the only argument.

## Import the util

<DocsSnippet @name="import-readable-file-size-util.js" />

## Usage

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="readable-file-size-util.hbs" class="viewport">
    <ul> 
      {{#each this.fileSizes as |fileSize|}}
        <li>{{fileSize}}</li>
      {{/each}}
    </ul>
  </demo.example>
  <demo.snippet @name="readable-file-size-util.js" @label="Controller" @language="javascript" />
  <demo.snippet @name="readable-file-size-util.hbs" @label="Template" @language="htmlbars" />
  <demo.snippet @name="filesizes.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>
