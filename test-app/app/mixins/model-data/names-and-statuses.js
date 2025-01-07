import Mixin from '@ember/object/mixin';
import EmberObject from '@ember/object';

export default Mixin.create({
  // BEGIN-SNIPPET names-and-statuses.js
  model() {
    var people = [
      {
        name: 'Lesley Knope',
        status: 'passed',
      },
      {
        name: 'Andy Dwyer',
        status: 'failed',
      },
      {
        name: 'Lil Sebastian',
        status: 'absent',
      },
    ];
    return people.map((person) => {
      return EmberObject.create(person);
    });
  },
  // END-SNIPPET
});
