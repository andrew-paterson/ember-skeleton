import { helper } from '@ember/component/helper';
import customInflectorUtil from 'ember-skeleton/utils/custom-inflector';

export function customInflector([value], hash) {
  return customInflectorUtil(value, hash);
}

export default helper(customInflector);
