import { inject } from '@ember/service';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import window from 'ember-window-mock';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i, n } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  {{did-insert this.checkToggled}}\n  class=\"{{if this.emberSkeleton.sidebarCollapsed \'sidebar-collapsed\'}}\n    {{if this.emberSkeleton.sidebarToggled \'sidebar-toggled\'}}\"\n  data-test-id=\"ember-skeleton-sidebar\"\n  ...attributes\n>\n\n  {{yield}}\n</div>");

class SidebarWrapper extends Component {
  static {
    g(this.prototype, "emberSkeleton", [inject]);
  }
  #emberSkeleton = (i(this, "emberSkeleton"), undefined);
  checkToggled() {
    if (window.localStorage.getItem('emberSkeletonSidebarCollapsed')) {
      this.emberSkeleton.sidebarCollapsed = true;
    }
  }
  static {
    n(this.prototype, "checkToggled", [action]);
  }
}
setComponentTemplate(TEMPLATE, SidebarWrapper);

export { SidebarWrapper as default };
//# sourceMappingURL=sidebar-wrapper.js.map
