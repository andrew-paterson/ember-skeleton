import Route from '@ember/routing/route';
import NamesAndStatusNumbers from '../../../mixins/model-data/names-and-status-numbers.js';

export default class ReplaceString extends Route.extend(
  NamesAndStatusNumbers,
) {}
