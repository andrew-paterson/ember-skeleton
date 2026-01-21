import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<footer ...attributes>\n  <div class=\'container section-padding-x text-white\'>\n    Create your own footer by adding a component at\n    <span class=\'monospace\'>components/ember-skeleton/footer</span>\n    in your Ember app.\n  </div>\n</footer>");

class Footer extends Component {}
setComponentTemplate(TEMPLATE, Footer);

export { Footer as default };
//# sourceMappingURL=footer.js.map
