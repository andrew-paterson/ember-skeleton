import { helper } from '@ember/component/helper';
import readableFileSize$2 from '../../utils/readable-file-size.js';

function readableFileSize([numberOfBytes]) {
  return readableFileSize$2(numberOfBytes);
}
var readableFileSize$1 = helper(readableFileSize);

export { readableFileSize$1 as default, readableFileSize };
//# sourceMappingURL=readable-file-size.js.map
