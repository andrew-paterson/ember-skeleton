'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapFont: false,
      importBootstrapCSS: false,
    },
    snippetSearchPaths: ['app', '../addon/src/utils', 'config'],
    'ember-cli-addon-docs': {
      documentingAddonAt: '../addon',
    },
  });

  return app.toTree();
};
