import { inject as service } from '@ember/service';
// BEGIN-SNIPPET options-in-service.js
import Component from '@ember/component';

export default class ServiceOptions extends Component {
  @service
  emberSkeleton;

  didInsertElement() {
    console.log(this.emberSkeleton.options);
  }
}
// END-SNIPPET
