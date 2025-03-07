import { helper } from '@ember/component/helper';
import arrayJoinUtil from '../../utils/array-join.js';

export function arrayJoin(params, hash) {
  return arrayJoinUtil(params[0], params[1], hash);
}

export default helper(arrayJoin);
