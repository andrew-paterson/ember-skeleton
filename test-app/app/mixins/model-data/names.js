import Mixin from '@ember/object/mixin';

export default Mixin.create({
  // BEGIN-SNIPPET names.js
  model() {
    return {
      names: ['Lil Sebastian', 'Lesley Knope', 'Andy Dwyer'],
    };
    // END-SNIPPET
  },
});
