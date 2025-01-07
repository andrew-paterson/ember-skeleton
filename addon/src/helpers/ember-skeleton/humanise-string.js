import { helper } from '@ember/component/helper';
import humaniseStringUtil from '../../utils/humanise-string';

export function humaniseString([string, casing]) {
  return humaniseStringUtil(string, casing);
}

export default helper(humaniseString);
