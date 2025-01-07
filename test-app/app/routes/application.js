import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// BEGIN-SNIPPET loading-state-application-route.js
import Route from '@ember/routing/route';

export default class Application extends Route {
  @service
  emberSkeleton;

  @action
  loading(transition) {
    this.set('emberSkeleton.isLoading', true);
    transition.promise.finally(() => {
      this.set('emberSkeleton.isLoading', false);
    });
  }
}
// END-SNIPPET
