import { helper } from '@ember/component/helper';

function emberSkeletonStringSplit(params /*, hash*/) {
  if (!params[0]) {
    return;
  }
  if (typeof params[0] !== 'string') {
    return params[0];
  }
  var splitChar = params[1] || ',';
  return params[0].split(splitChar);
}
var stringSplit = helper(emberSkeletonStringSplit);

export { stringSplit as default, emberSkeletonStringSplit };
//# sourceMappingURL=string-split.js.map
