import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';
import Component from '@glimmer/component';
import themeColorString from '../../utils/theme-color-string.js';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class=\"{{this.classes}}\n    {{@borderColor}}\n    {{@shadowLevel}}\n    {{if this.materialCardHoverEffect \'card-box-shadow-hover-effect\'}}\"\n  ...attributes\n>\n  {{yield}}\n</div>");

class MaterialCard extends Component {
  classes = ' border rounded padding-lg card-box-shadow ';
  static {
    g(this.prototype, "emberSkeleton", [inject]);
  }
  #emberSkeleton = (i(this, "emberSkeleton"), undefined);
  static {
    g(this.prototype, "borderColorProp", [tracked]);
  }
  #borderColorProp = (i(this, "borderColorProp"), undefined);
  static {
    g(this.prototype, "depth", [tracked]);
  }
  #depth = (i(this, "depth"), undefined);
  get borderColor() {
    if (!this.args.borderColorProp) {
      return;
    }
    return `border-${themeColorString(this.args.borderColorProp, this.args.themeColorStringHash)}`;
  }
  get shadowLevel() {
    if (!this.args.depth) {
      return;
    }
    return `card-box-shadow-level-${this.args.depth}`;
  }
}
setComponentTemplate(TEMPLATE, MaterialCard);

export { MaterialCard as default };
//# sourceMappingURL=material-card.js.map
