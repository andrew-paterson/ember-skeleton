import { helper } from '@ember/component/helper';
import readableFileSizeUtil from '../../utils/readable-file-size.js';

export function readableFileSize([numberOfBytes]) {
  return readableFileSizeUtil(numberOfBytes);
}

export default helper(readableFileSize);
