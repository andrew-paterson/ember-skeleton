# Introduction

The styles are implemented using `SASS`, and thus the `ember-cli-sass` addon is required. Install by running `ember install ember-cli-sass`.

There are two stylesheets which need to be imported in `app/styles/app.scss`.

<DocsSnippet @name="basic-style-imports.scss" @language="css" />

## Overriding SASS variables

All variables listed in `app/styles/ember-skeleton/variables` can be overridden. This must be done before the import of `ember-skeleton-variables`.

<DocsSnippet @name="overriding-default-scss-vars.scss" @language="scss" @title="app.scss" />

## Boostrap integration

Several components of Boostrap 4.1 SASS code have been borrowed, some of which have been slightly modified. The original Bootstrap docs are listed below. Note that additional CSS classes have been added to some of these components in the Ember Skeleton SASS code.

### Bootstrap components

* [Alerts](https://getbootstrap.com/docs/4.1/components/alerts/)
* [Badge](https://getbootstrap.com/docs/4.1/components/badge/)
* [Buttons](https://getbootstrap.com/docs/4.1/components/buttons/)
* [List group](https://getbootstrap.com/docs/4.1/components/list-group/)

### Bootstrap utilities

* [Borders and border radius](https://getbootstrap.com/docs/4.1/utilities/borders/)
* [Colours](https://getbootstrap.com/docs/4.1/utilities/colors/)