import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import window from 'ember-window-mock';

export default class SidebarWrapper extends Component {
  @service
  emberSkeleton;

  @action
  checkToggled() {
    if (window.localStorage.getItem('emberSkeletonSidebarCollapsed')) {
      this.emberSkeleton.sidebarCollapsed = true;
    }
  }
}
