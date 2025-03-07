import Route from '@ember/routing/route';
import NamesAndStatusesTwo from '../../../mixins/model-data/names-and-statuses-two.js';

export default class HumaniseString extends Route.extend(NamesAndStatusesTwo) {}
