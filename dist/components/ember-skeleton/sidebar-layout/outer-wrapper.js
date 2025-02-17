import { inject } from '@ember/service';
import Component from '@glimmer/component';
import './ember-skeleton.css';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  data-test-id=\"ember-skeleton-sidebar-layout\"\n  class=\"wrapper sidebar-layout esk-container\n    {{this.emberSkeleton.appNamespace}}\n    {{if this.emberSkeleton.hideContent \'hide-content\' \'show-content\'}}\n    {{if this.contentHeader \'content-header\'}}\n    {{if this.emberSkeleton.navFrozen \'nav-frozen\'}}\"\n  ...attributes\n>\n\n  <this.emberSkeleton.options.headerComponent @headerProps={{@headerProps}} />\n  <section id=\"columns\">\n    <EmberSkeleton::SidebarLayout::SidebarWrapper class=\"esk-sidebar\">\n\n      <this.emberSkeleton.options.sidebarContentComponent\n        @sidebarProps={{@sidebarProps}}\n      />\n    </EmberSkeleton::SidebarLayout::SidebarWrapper>\n    <div class=\"main\">\n      <EmberSkeleton::MainContent>\n        {{yield}}\n      </EmberSkeleton::MainContent>\n\n      <this.emberSkeleton.options.footerComponent\n        @footerProps={{@footerProps}}\n      />\n    </div>\n  </section>\n</div>");

class OuterWrapper extends Component {
  static {
    g(this.prototype, "emberSkeleton", [inject]);
  }
  #emberSkeleton = (i(this, "emberSkeleton"), undefined);
}
setComponentTemplate(TEMPLATE, OuterWrapper);

export { OuterWrapper as default };
//# sourceMappingURL=outer-wrapper.js.map
