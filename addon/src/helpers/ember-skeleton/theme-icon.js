import { helper } from '@ember/component/helper';
import themeIconUtil from '../../utils/theme-icon';

export function themeIcon(params, hash) {
  return themeIconUtil(params[0], hash);
}

export default helper(themeIcon);
