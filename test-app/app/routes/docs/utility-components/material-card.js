import Route from '@ember/routing/route';
import NamesAndStatuses from '../../../mixins/model-data/names-and-statuses.js';

export default class MaterialCard extends Route.extend(NamesAndStatuses) {}
