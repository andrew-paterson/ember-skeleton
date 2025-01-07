import { computed } from '@ember/object';
// BEGIN-SNIPPET robotise-string-util.js
import Controller from '@ember/controller';
import robotiseStringUtil from 'ember-skeleton/utils/robotise-string';

export default class RobotiseString extends Controller {
  @computed('model')
  get nameVersions() {
    return {
      unchanged: this.model.names[0],
      default: robotiseStringUtil(this.model.names[0]),
      customSeparator: robotiseStringUtil(this.model.names[0], '---'),
    };
  }
}
//END-SNIPPET
