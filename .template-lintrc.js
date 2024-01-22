'use strict';

module.exports = {
  // extends: 'recommended',
  rules: {
    // 'attribute-indentation': false,
    'no-implicit-this': {
      allow: [
        'ember-skeleton/array-join',
        'ember-skeleton/custom-inflector',
        'ember-skeleton/custom-sort-objects',
        'ember-skeleton/humanise-string',
        'ember-skeleton/in-array',
        'ember-skeleton/odd-or-even',
        'ember-skeleton/readable-file-size',
        'ember-skeleton/replace-string',
        'ember-skeleton/robotise-string',
        'ember-skeleton/string-split',
        'ember-skeleton/theme-color-string',
        'ember-skeleton/theme-icon',
      ],
    },
  },
};
