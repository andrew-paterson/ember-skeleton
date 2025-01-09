import { helper } from '@ember/component/helper';
import oddOrEvenUtil from '../../utils/odd-or-even';

export function oddOrEven([num]) {
  return oddOrEvenUtil(num);
}

export default helper(oddOrEven);
