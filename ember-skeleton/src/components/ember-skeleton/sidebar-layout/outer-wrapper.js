import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
// import './ember-skeleton.css';

export default class OuterWrapper extends Component {
  @service
  emberSkeleton;
}
