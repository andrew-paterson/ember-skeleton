import Route from '@ember/routing/route';
import NamesAndStatusNumbers from '../../../mixins/model-data/names-and-status-numbers';

export default class ReplaceString extends Route.extend(NamesAndStatusNumbers) {}
