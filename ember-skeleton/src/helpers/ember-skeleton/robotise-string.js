import { helper } from '@ember/component/helper';
import robotiseStringUtil from '../../utils/robotise-string.js';

export function robotiseString([string, casing]) {
  return robotiseStringUtil(string, casing);
}

export default helper(robotiseString);
