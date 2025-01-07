import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class OuterWrapper extends Component {
  @service
  emberSkeleton;

  dataTestId = 'ember-skeleton-sidebar-layout';
}
