// import config from 'ember-get-config';

/* eslint-disable ember/new-module-imports */
function emberSkeletonOptions() {
  const config = {
    emberSkeletonOptions: {},
  };
  var configOverrides = config.emberSkeletonOptions;
  const addonDefaults = {
    // BEGIN-SNIPPET addon-default-options.js
    headerComponent: 'ember-skeleton/header',
    loadingComponent: 'ember-skeleton/loading-page',
    footerComponent: 'ember-skeleton/footer',
    sidebarContentComponent: 'ember-skeleton/sidebar-content',
    alternativeContentComponent: 'ember-skeleton/alternative-content',
    // END-SNIPPET
  };
  return Object.assign(addonDefaults, configOverrides);
}

export { emberSkeletonOptions as default };
//# sourceMappingURL=ember-skeleton-options.js.map
