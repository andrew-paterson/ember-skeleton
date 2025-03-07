import { helper } from '@ember/component/helper';
import oddOrEvenUtil from '../../utils/odd-or-even.js';

export function oddOrEven([num]) {
  return oddOrEvenUtil(num);
}

export default helper(oddOrEven);
