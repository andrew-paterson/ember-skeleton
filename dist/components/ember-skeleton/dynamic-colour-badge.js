import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import contrastColor from '../../utils/contrast-color.js';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  style={{style this.style}}\n  class=\"badge badge-gray-medium {{this.textClass}}\"\n  ...attributes\n>\n  {{@text}}\n</div>");

class DynamicColourBadge extends Component {
  static {
    g(this.prototype, "background", [tracked]);
  }
  #background = (i(this, "background"), undefined);
  get textClass() {
    return this.background ? `text-${contrastColor(this.background)}` : null;
  }
  get style() {
    return this.background ? {
      background: `#${this.background}`.replace('##', '#')
    } : null;
  }
}
setComponentTemplate(TEMPLATE, DynamicColourBadge);

export { DynamicColourBadge as default };
//# sourceMappingURL=dynamic-colour-badge.js.map
