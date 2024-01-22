import { computed } from '@ember/object';
import Controller from '@ember/controller';
// BEGIN-SNIPPET import-odd-or-even-util.js
import oddOrEvenUtil from 'ember-skeleton/utils/odd-or-even';
//END-SNIPPET
export default class OddOrEven extends Controller {
  // BEGIN-SNIPPET odd-or-even-util.js
  @computed('model')
  get oddOrEvenVotes() {
    return this.model.map((person) => {
      return `${person.name} has an ${oddOrEvenUtil(
        person.votes
      )} number of votes.`;
    });
  }
  //END-SNIPPET
}
