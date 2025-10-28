import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class MainContent extends Component {
  @service
  emberSkeleton;

  get renderContent() {
    return (
      !this.emberSkeleton.isLoading || this.emberSkeleton.isLoading === 'css'
    );
  }
}
