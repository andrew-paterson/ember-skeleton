import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import ApplicationController from './application';
import { inject as service } from '@ember/service';

export default ApplicationController.extend({
  systemAlert: alias('systemAlerts.routes.sideBarLayout'),
  basicLayoutControls: service(),

  init: function() {
    this._super(...arguments);
    var test =  {
      type: 'success',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores magnam praesentium quae quod ipsa ducimus ex, soluta ut suscipit consequatur tempore qui nulla et, eligendi sint quasi excepturi est. Perferendis.'
    }
    this.set('systemAlert', test);

  }
});
