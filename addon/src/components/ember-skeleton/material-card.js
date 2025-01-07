import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import themeColorStringUtil from '../../utils/theme-color-string';

export default class MaterialCard extends Component {
  classes = ' border rounded padding-lg card-box-shadow ';
  @service
  emberSkeleton;

  @tracked borderColorProp;
  @tracked depth;

  get borderColor() {
    if (!this.args.borderColorProp) {
      return;
    }
    return `border-${themeColorStringUtil(
      this.args.borderColorProp,
      this.args.themeColorStringHash,
    )}`;
  }

  get shadowLevel() {
    if (!this.args.depth) {
      return;
    }
    return `card-box-shadow-level-${this.args.depth}`;
  }
}
