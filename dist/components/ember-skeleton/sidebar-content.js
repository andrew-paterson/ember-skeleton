import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"padding-lg text-white\" ...attributes>\n  Create your own sidebar content by adding a component at\n  <span class=\"monospace\">components/ember-skeleton/sidebar-content</span>\n  in your Ember app.\n</div>");

class SidebarContent extends Component {}
setComponentTemplate(TEMPLATE, SidebarContent);

export { SidebarContent as default };
//# sourceMappingURL=sidebar-content.js.map
