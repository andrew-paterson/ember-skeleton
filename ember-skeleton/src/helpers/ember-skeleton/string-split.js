import { helper } from '@ember/component/helper';

export function emberSkeletonStringSplit(params /*, hash*/) {
  if (!params[0]) {
    return;
  }
  if (typeof params[0] !== 'string') {
    return params[0];
  }
  var splitChar = params[1] || ',';
  return params[0].split(splitChar);
}

export default helper(emberSkeletonStringSplit);
