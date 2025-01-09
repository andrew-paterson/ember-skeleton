import { helper } from '@ember/component/helper';
import themeColorStringUtil from '../../utils/theme-color-string';

export function themeColorString(params, hash) {
  return themeColorStringUtil(params[0], hash);
}

export default helper(themeColorString);
