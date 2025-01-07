import Route from '@ember/routing/route';
import PeopleAndVotes from '../../../mixins/model-data/people-and-votes';

export default class CustomInflector extends Route.extend(PeopleAndVotes) {}
