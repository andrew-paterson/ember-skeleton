Ember Skeleton
==============================================================================

Provides some basic layout components and generic SASS stylesheets.

Installation
------------------------------------------------------------------------------

```
ember install ember-skeleton
```

Requirements

The addon `ember-cli-sass` must be installed.

Usage
------------------------------------------------------------------------------

## Components

### Material Card

Adds static classes to a component to give it rounded corners, large padding, a border and box shadow effect. 

#### Options

* `depth` Default is 1, max is 5. Sets the depth of the box shadow based on the Google Material Design spec.
* `borderColorProp` When passed, the component leverages the `ember-skeleton/theme-color-string` helper to apply a custom border colour, based on the `borderColorProp`.
* `themeColorStringHash` Allows you to pass a hash of custom string associations to be used by the `ember-skeleton/theme-color-string` helper when returning the border colour. In the example below, the class `border-success` will be added if `someProp` evaluates to "ok".
* `materialCardHoverEffect` Determines whether or not effects will be applied when the user hovers obver the card.

#### Usage in HBS

    {{#ember-skeleton/material-card
      materialCardHoverEffect=true
      borderColorProp=someProp
      depth=2
      themeColorStringHash=(hash
        ok="success"
      )
    }}
      ...
    {{/ember-skeleton/material-card}}

#### Usage by Class Extension

You can make any component into a material card component by extending the material-card component class.

    // component JS
    import MaterialCard from 'ember-skeleton/components/ember-skeleton/material-card';

    export default MaterialCard.extend({
      ...
    });

When inserting the relevant component there are options.

## Helpers

### Humanise String

Accepts a string as the first argument.

Replaces underscores with spaces in the string, and applies one of three casing functions: 

* `titleCase (default)`
* `sentenceCase`
* `lowerCase`

#### Examples

`{{ember-skeleton/humanise-string "Action_required"}}`

**`// Action Required`**

`{{ember-skeleton/humanise-string "Action_required" "sentenceCase"}}`

**`// Action required`**

`{{ember-skeleton/humanise-string "Action_required" "lowerCase"}}`

**`// action required`**

`{{ember-skeleton/humanise-string "Action_required" "upperCase"}}`

**`// ACTION REQUIRED`**

#### Usage in JavaScript

```
import { humaniseString } from 'ember-skeleton/helpers/ember-skeleton/humanise-string';
...
humaniseString(['action_required', 'sentenceCase']);
```

### Theme Color String

Receives a string and returns another string, based on the settings in the ember-skeleton service (If they exist) ans the hash passed when calling the helper in a template.

`{{ember-skeleton/theme-color-string "present" present="success" absent="danger"}}`

**`// success`**

`{{ember-skeleton/theme-color-string "absent" present="success" absent="danger"}}`

**`// danger`**

#### Default associations

These can be set in `app/services/ember-skeleton` in the consuming app, as shown below. Note that you can also override `defaultThemeColorString`, which is what the helper will return if the string passed does not match anything in the default settings, nor in the hash passed to the helper. 

    import Service from '@ember/service';

    export default Service.extend({
      init() {
        this._super(...arguments);
        this.themeColorStringDefaults = [{
          returnString: 'success',
          matchStrings: ['complete', 'active', 'accepted']
        },
        {
          returnString: 'warning',
          matchStrings: ['absent']
        },
        {
          returnString: 'danger',
          matchStrings: ['failed', 'error', 'revoked', 'rejected']
        },
        {
          returnString: 'gray-medium',
          matchStrings: ['pending', 'processing']
        }];
      },
      ...
      defaultThemeColorString: 'gray-medium',
    });

`{{ember-skeleton/theme-color-string "complete"}}`

**`// success`**

`{{ember-skeleton/theme-color-string "unmatched-string"}}`

**`// gray-medium`** (Because of `defaultThemeColorString: 'gray-medium'`)

#### Usage in JavaScript

```
import { themeColorString } from 'ember-skeleton/helpers/ember-skeleton/theme-color-string';
...
themeColorString(['test'], {test: 'completed'});
```

Note that if you have defined `themeColorStringDefaults` in the `emberSkeleton` service of the consuming app, this will not be available to the helper when calling it in JavaScript. To make these available, include them in the hash passed to the helper, with the key `defaultAssotiations`.

```
import { themeColorString } from 'ember-skeleton/helpers/ember-skeleton/theme-color-string';
import { inject as service } from '@ember/service';

...
emberSkeleton: service(),
themeColorString(['test'], {defaultAssociations: this.emberSkeleton.themeColorStringDefaults});
```

### Custom Inflector

Determines whether the singular or plural version of a word should be used. Accepts a number as the first argument, ad a hash of the singular and plural versions of the work or phrase.

The plural version is option- if not passed, the plural version of the phrase defaults to the singular version with 's' appended.

`{{ember-skeleton/custom-inflector 1 singular="mouse" plural="mice"}}`

**`// mouse`**

`{{ember-skeleton/custom-inflector 2 singular="mouse" plural="mice"}}`

**`// mice`**

#### Usage in JavaScript

```
import { customInflector } from 'ember-skeleton/helpers/ember-skeleton/custom-inflector';
...
customInflector([number], {singular:"item was", plural:"items were"});
```

### Readable File Size

Returns a human readable filesize, after receiving a number of bytes as the only argument.

`{{ember-skeleton/readable-file-size 2345345234}}`

#### Usage in JavaScript

```
import { readableFileSize } from 'ember-skeleton/helpers/ember-skeleton/readable-file-size';
...
readableFileSize([23523532345]);
```
### Replace String

Receives a string to search for as the first argument, and then either a search tem and a replace term (simple search), or an array of search and replace hashes (advanced search). Note that the value of the `default` hash will be returned if the string is not found in any of the hashes.

#### Simple Usage

`{{ember-skeleton/replace-string "spain" "spain" "europe"}}`

**`// europe`**

#### Advanced Usage

    {{ember-skeleton/replace-string "qc_pending" 
      advanced=(array 
        (hash
          find="spain"
          replace="europe"
        )
        (hash
          find="south-africa"
          replace="africa"
        )
      )
    }}

Note that you can pass an array as the `find` property in your advanced search hashes.

    {{ember-skeleton/replace-string "south-africa" 
      advanced=(array 
        (hash
          find=(array "spain" "italy" "france")
          replace="europe"
        )
        (hash
          find=(array "south-africa" "ethiopia" "namibia")
          replace="africa"
        )
      ) default="unknown"
    }}

**`// africa`**

#### Default

`{{ember-skeleton/replace-string "not-a-real-country" "spain" "europe" default="unknown"}}`

**`// unknown`**

If there are no matches and no default is passed, the original string is returned.

`{{ember-skeleton/replace-string "not-a-real-country" "spain" "europe"}}`

**`// not-a-real-country`**

# Layouts

## Sidebar layout

Includes a sidebar to the left, and a main content section to the right. The content is aligned to the left of the main content section.

Invoked as below. If content header is true, the class `content-header` is added to the wrapper div, and the styles add additional padding to the top of the right hand section (The main section) allowing an additional fixed bar to be placed at the top of the section.

    {{#ember-skeleton/sidebar-layout/outer-wrapper contentHeader=true}}
    ...
    {{/ember-skeleton/sidebar-layout/outer-wrapper}}

## Panel layout

Created a layout with a horizontal panel spanning the full width of the screen. The content is centred within it. Invoked as below.

    {{#ember-skeleton/panel-layout/outer-wrapper}}
    ...
    {{/ember-skeleton/panel-layout/outer-wrapper}}

## Content wrapper

To be used inside either of the they panel or sidebar layouts. Creates what you could think of as the main content area of the page, and implements text styles for "main content" text.

Accepts one argument- the main title to be displayed on the page.

    {{#ember-skeleton/panel-layout/outer-wrapper}}
      {{#ember-skeleton/content-wrapper title=pageTitle}}
        ...
      {{/ember-skeleton/content-wrapper}}
    {{/ember-skeleton/panel-layout/outer-wrapper}}

# Styles

The styles are implemented using `SASS`, and thus the `ember-cli-sass` addon is required. Install by running `ember install ember-cli-sass`.

There are to stylesheets which need to be imported in `app/styles/app.scss`.

```
@import "ember-skeleton-variables";
@import 'ember-skeleton';
```

## Boostrap integration

Bootstrap is used heavily, but not completely. The following components are used from Boostrap 4.1. Note that some of the original Boostrap stylesheets have been modified.

### Bootstrap components

* [Alerts](https://getbootstrap.com/docs/4.1/components/alerts/)
* [Badge](https://getbootstrap.com/docs/4.1/components/badge/)
* [Buttons](https://getbootstrap.com/docs/4.1/components/buttons/)
* [List group](https://getbootstrap.com/docs/4.1/components/list-group/)

### Bootstrap utilities

* [Borders](https://getbootstrap.com/docs/4.1/utilities/borders/)
* [Colours](https://getbootstrap.com/docs/4.1/utilities/colors/)

## Flexbox styles

There are flexbox related classes defined in `ember-skeleton/app/styles/layout/flex-layouts.scss`.

## Fill and stroke styles

The colour variants defined are extended to set the colour of both the fill and stroke properties. Example classes from the default bootstrap colour variants:

`fill-danger`, `fill-success`, `fill-warning`
`stroke-danger`, `stroke-success`, `stroke-warning`

### Overriding fill and stroke for elements inside an svg

Note the following variables:

    $svg-foreground-graphic-fill
    $svg-foreground-graphic-stroke-color

By adding the class `foreground-graphic` to any element inside an svg, the fill and stoke colours will be whatever the corresponding variables are set to (Default is `#fff`). 

### Overlay background and fill classes

By default the following two sets of classes add a semi transparent css background that produce a semi transprent background. The number represents the opacity as a percentage.

### Background

`overlay-bg-black-10` `overlay-bg-black-20` `overlay-bg-black-50` 
`overlay-bg-white-10` `overlay-bg-white-20` `overlay-bg-white-50` 

### Fill

`overlay-fill-black-10` `overlay-fill-black-20` `overlay-fill-black-50` 
`overlay-fill-white-10` `overlay-fill-white-20` `overlay-fill-white-50` 

### Custom overlay background classes

Add new colours by passing a map to the the variable `$overlay-colours`

    $overlay-colours: (
      "green": "0,255,0",
      "red": "255,0,0"
    );

Override the default levels by defining the variable `$overlay-levels`. Note that this will override the default levels entirely, so you need to include the defaults if you want to use them.

    $overlay-levels: 5, 10;

The above examples would result in the following CSS:

    .overlay-bg-green-5 {
      background: rgba( 0,255,0 , 0.05 );
    }

    .overlay-bg-green-10 {
      background: rgba( 0,255,0 , 0.1 );
    }

    .overlay-bg-red-5 {
      background: rgba( 255,0,0 , 0.05 );
    }

    .overlay-bg-red-10 {
      background: rgba( 255,0,0 , 0.1 );
    }

    .overlay-fill-green-5 {
      background: rgba( 0,255,0 , 0.05 );
    }

    .overlay-fill-green-10 {
      background: rgba( 0,255,0 , 0.1 );
    }

    .overlay-fill-red-5 {
      background: rgba( 255,0,0 , 0.05 );
    }

    .overlay-fill-red-10 {
      background: rgba( 255,0,0 , 0.1 );
    }

## Mixins

### Box shadow

The `box-shadow` mixin accepts two arguments- the position and opacity.

The default opacity is 0.16.

There are 9 positions available:

`top`, `bottom`, `left`, `right`, `topInset`, `bottomInset`, `leftInset`, `rightInset`, `bottomRight`

Add a single shadow with the default opacity.

`@include box-shadow(bottomRight);`

Multiple shadows can be added to one element, with a custom opacity.

`@include box-shadow((leftInset, topInset, bottom), 0.2);`

#

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-skeleton`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).