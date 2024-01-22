import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// BEGIN-SNIPPET loading-state-application-route.js
import Route from '@ember/routing/route';

export default class Application extends Route {
  @service
  emberSkeleton;

  @action
  loading(transition) {
    this.set('emberSkeleton.hideContent', true);
    transition.promise.finally(() => {
      this.set('emberSkeleton.hideContent', false);
    });
  }
}
// END-SNIPPET
