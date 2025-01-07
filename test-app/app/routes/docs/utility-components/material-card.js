import Route from '@ember/routing/route';
import NamesAndStatuses from '../../../mixins/model-data/names-and-statuses';

export default class MaterialCard extends Route.extend(NamesAndStatuses) {}
