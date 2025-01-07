import { computed } from '@ember/object';
import Controller from '@ember/controller';
// BEGIN-SNIPPET import-readable-file-size-util.js
import readableFileSizeUtil from 'ember-skeleton/utils/readable-file-size';
//END-SNIPPET
export default class ReadableFileSize extends Controller {
  // BEGIN-SNIPPET readable-file-size-util.js
  @computed('model')
  get fileSizes() {
    return this.model.map((item) => {
      return readableFileSizeUtil(item);
    });
  }
  //END-SNIPPET
}
