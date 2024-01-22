/* eslint-disable ember/new-module-imports */
import config from 'ember-get-config';

export default function () {
  var configOverrides = config.emberSkeletonOptions;
  const addonDefaults = {
    // BEGIN-SNIPPET addon-default-options.js
    headerComponent: 'ember-skeleton/header',
    loadingComponent: 'ember-skeleton/loading-page',
    footerComponent: 'ember-skeleton/footer',
    sidebarContentComponent: 'ember-skeleton/sidebar-content', // END-SNIPPET
  };
  return Object.assign(addonDefaults, configOverrides);
}
