import { computed } from '@ember/object';
import Controller from '@ember/controller';
// BEGIN-SNIPPET import-custom-inflector-util.js
import customInflectorUtil from 'ember-skeleton/utils/custom-inflector';
//END-SNIPPET
export default class CustomInflector extends Controller {
  // BEGIN-SNIPPET custom-inflector-util-default-plural.js
  @computed('model')
  get defaultPlural() {
    return this.model.map((person) => {
      return `${person.name} got ${person.votes} ${customInflectorUtil(
        person.votes,
        { singular: 'vote' }
      )}.`;
    });
  }

  //END-SNIPPET

  // BEGIN-SNIPPET custom-inflector-util-custom-plural.js
  @computed('model')
  get customPlural() {
    return this.model.map((person) => {
      return `${person.name} has been voted for  ${
        person.votes
      } ${customInflectorUtil(person.votes, {
        singular: 'once',
        plural: 'several times',
      })}.`;
    });
  }
  //END-SNIPPET
}
