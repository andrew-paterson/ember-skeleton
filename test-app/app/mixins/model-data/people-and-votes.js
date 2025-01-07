import Mixin from '@ember/object/mixin';

export default Mixin.create({
  // BEGIN-SNIPPET people-and-votes.js
  model() {
    return [
      {
        name: 'Lesley Knope',
        votes: 235,
      },
      {
        name: 'Andy Dwyer',
        votes: 1,
      },
      {
        name: 'Lil Sebastian',
        votes: 25000,
      },
    ];
  },
  // END-SNIPPET
});
