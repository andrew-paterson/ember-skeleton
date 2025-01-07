'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'test-app',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    emberSkeletonOptions: {
      // BEGIN-SNIPPET theme-color-string-app-defaults.js
      themeColorStringDefaults: [
        {
          returnString: 'success',
          matchStrings: ['ok', 'passed', 'active'],
        },
        {
          returnString: 'warning',
          matchStrings: ['absent'],
        },
        {
          returnString: 'danger',
          matchStrings: ['failed', 'error'],
        },
        {
          returnString: 'gray-medium',
          matchStrings: ['pending'],
          fallback: true,
        },
      ],
      // END-SNIPPET
      // BEGIN-SNIPPET theme-icon-app-defaults.js
      themeIconDefaults: [
        {
          returnString: 'svg/icons/icon-alert',
          matchStrings: ['danger', 'failed'],
          fallback: true,
        },
        {
          returnString: 'svg/icons/icon-tick',
          matchStrings: ['success', 'passed'],
        },
      ], // END-SNIPPET
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Allow ember-cli-addon-docs to update the rootURL in compiled assets
    ENV.rootURL = '/ADDON_DOCS_ROOT_URL/';
    // here you can enable a production-specific feature
  }

  return ENV;
};
