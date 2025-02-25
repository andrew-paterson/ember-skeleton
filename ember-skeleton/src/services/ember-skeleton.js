import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Service from '@ember/service';
import emberSkeletonOptions from '../utils/ember-skeleton-options.js';
import window from 'ember-window-mock';
import { getOwner } from '@ember/application';
import themeColorStringUtil from '../utils/theme-color-string.js';

export default class EmberSkeletonService extends Service {
  @tracked layoutType = 'main';
  @tracked isLoading;
  @tracked sidebarCollapsed;
  @tracked navFrozen;
  @tracked alternativeContent;
  @tracked options = emberSkeletonOptions(
    getOwner(this).resolveRegistration('config:environment'),
  );

  themeColorString(string, options) {
    return themeColorStringUtil(
      string,
      options,
      this.options.themeColorStringDefaults,
    );
  }

  @action
  toggleSidebarExpanded() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    if (this.sidebarCollapsed) {
      window.localStorage.setItem('emberSkeletonSidebarCollapsed', 'true');
    } else {
      window.localStorage.removeItem('emberSkeletonSidebarCollapsed');
    }
  }
}
