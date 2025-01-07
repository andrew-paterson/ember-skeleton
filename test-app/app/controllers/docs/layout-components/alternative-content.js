// BEGIN-SNIPPET alternative-content-controller.js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AlternativeContent extends Controller {
  @service
  emberSkeleton;

  @action
  toggleAlternativeContent() {
    if (this.emberSkeleton.alternativeContent) {
      this.emberSkeleton.alternativeContent = null;
    } else {
      this.emberSkeleton.alternativeContent = {
        title: 'Server unavailable',
        icon: 'svg/icons/icon-alert',
        iconFill: 'danger',
        message: 'The server is currently unavailable',
      };
    }
  }
}
//END-SNIPPET
