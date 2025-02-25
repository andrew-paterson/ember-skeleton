import { helper } from '@ember/component/helper';
import themeColorStringUtil from '../../utils/theme-color-string.js';

export function themeColorString(params, hash) {
  return themeColorStringUtil(params[0], params[1], hash);
}

export default helper(themeColorString);
