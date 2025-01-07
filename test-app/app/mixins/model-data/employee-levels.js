import Mixin from '@ember/object/mixin';

export default Mixin.create({
  // BEGIN-SNIPPET employee-levels.js
  model() {
    var seniorEmployees = ['Ron Swanson', 'Lesley Knope'];
    var juniorEmployees = ['Lil Sebastian', 'Andy Dwyer'];
    var interns = ['April Ludgate'];
    return {
      seniorEmployees: seniorEmployees,
      juniorEmployees: juniorEmployees,
      interns: interns,
      all: seniorEmployees.concat(juniorEmployees).concat(interns),
    };
  },
  // END-SNIPPET
});
