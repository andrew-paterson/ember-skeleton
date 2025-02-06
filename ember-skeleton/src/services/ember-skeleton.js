import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Service from '@ember/service';
import emberSkeletonOptions from '../utils/ember-skeleton-options.js';
import window from 'ember-window-mock';
export default class EmberSkeletonService extends Service {
  layoutType = 'main';

  @tracked layoutType;
  @tracked isLoading;
  @tracked sidebarCollapsed;
  @tracked navFrozen;
  @tracked alternativeContent;
  @tracked options = emberSkeletonOptions();

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
