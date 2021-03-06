/* eslint-disable ember/new-module-imports */
import { assign } from '@ember/polyfills';
import config from 'ember-get-config';

export default function() {
  var configOverrides = config.emberSkeletonOptions;
  const addonDefaults = {
    headerComponent: 'ember-skeleton/header',
    loadingComponent: 'ember-skeleton/loading-page',
    footerComponent: 'ember-skeleton/footer',
    sidebarContentComponent: 'ember-skeleton/sidebar-content',
    collapseSideBarIconComponent: 'ember-skeleton/svg/icon-collapse-sidebar',
  };
  return assign(addonDefaults, configOverrides);
}