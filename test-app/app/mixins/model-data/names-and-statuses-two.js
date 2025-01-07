import Mixin from '@ember/object/mixin';

export default Mixin.create({
  // BEGIN-SNIPPET names-and-statuses-two.js
  model() {
    return [
      {
        name: 'Lesley Knope',
        status: 'Passed',
      },
      {
        name: 'Andy Dwyer',
        status: 'pending_review',
      },
      {
        name: 'Lil Sebastian',
        status: 'not-applicable',
      },
    ];
  },
  // END-SNIPPET
});
