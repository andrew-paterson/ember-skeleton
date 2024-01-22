import { computed } from '@ember/object';
// BEGIN-SNIPPET array-join-util.js
import Controller from '@ember/controller';
import arrayJoinUtil from 'ember-skeleton/utils/array-join';

export default class ArrayJoin extends Controller {
  @computed('model')
  get sentence() {
    return `My favourte characters are ${arrayJoinUtil(this.model.names, ', ', {
      finalJoinString: ' and ',
    })}.`;
  }
}
//END-SNIPPET
