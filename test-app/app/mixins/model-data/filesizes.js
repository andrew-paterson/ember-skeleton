import Mixin from '@ember/object/mixin';

export default Mixin.create({
  // BEGIN-SNIPPET filesizes.js
  model() {
    return [
      2345234534, 2230000000, 1230000001, 1230000000, 1999999999, 1000000000,
      2000000000, 200000000,
    ];
  },
  // END-SNIPPET
});
