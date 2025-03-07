import Route from '@ember/routing/route';
import EmployeeLevels from '../../../mixins/model-data/employee-levels.js';

export default class InArray extends Route.extend(EmployeeLevels) {}
