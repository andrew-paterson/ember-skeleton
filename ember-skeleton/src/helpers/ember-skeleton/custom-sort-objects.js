import { helper } from '@ember/component/helper';
import customSortObjectsUtil from '../../utils/ember-skeleton/custom-sort-objects';

export function customSortObjects(_params, hash) {
  return customSortObjectsUtil(hash);
}
export default helper(customSortObjects);
