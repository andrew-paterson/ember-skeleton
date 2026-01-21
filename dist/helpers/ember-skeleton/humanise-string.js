import { helper } from '@ember/component/helper';
import humaniseString$2 from '../../utils/humanise-string.js';

function humaniseString([string, casing]) {
  return humaniseString$2(string, casing);
}
var humaniseString$1 = helper(humaniseString);

export { humaniseString$1 as default, humaniseString };
//# sourceMappingURL=humanise-string.js.map
