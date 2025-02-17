import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<header class=\"padding-lg\" ...attributes>\n  <div>Create your own header by adding a component at\n    <span class=\"monospace\">components/ember-skeleton/header</span>\n    in your Ember app.</div>\n</header>");

class Header extends Component {}
setComponentTemplate(TEMPLATE, Header);

export { Header as default };
//# sourceMappingURL=header.js.map
