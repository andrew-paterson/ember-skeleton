// BEGIN-SNIPPET robotise-string-util.js
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import robotiseStringUtil from 'ember-skeleton/utils/robotise-string';

export default Controller.extend({
  nameVersions: computed('model', function () {
    return {
      unchanged: this.model.names[0],
      default: robotiseStringUtil(this.model.names[0]),
      customSeparator: robotiseStringUtil(this.model.names[0], '---'),
    };
  }),
});
//END-SNIPPET
