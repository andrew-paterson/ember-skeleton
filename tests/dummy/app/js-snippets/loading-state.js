import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// BEGIN-SNIPPET hide-content-explicit.js
import Component from '@ember/component';

export default class LoadingState extends Component {
  @service
  emberSkeleton;

  @action
  sumbitForm(data) {
    this.set('emberSkeleton.hideContent', true);
    this.submitForm(data)
      .then((response) => {
        this.set('emberSkeleton.hideContent', false);
        // Handle success
      })
      .catch((err) => {
        this.set('emberSkeleton.hideContent', false);
        // Handle err
      });
  }
}
// END-SNIPPET
