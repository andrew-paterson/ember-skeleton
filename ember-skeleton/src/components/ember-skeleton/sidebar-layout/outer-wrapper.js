import { service } from '@ember/service';
import Component from '@glimmer/component';
import '../../../styles/ember-skeleton.css';

export default class OuterWrapper extends Component {
  @service
  emberSkeleton;
}
