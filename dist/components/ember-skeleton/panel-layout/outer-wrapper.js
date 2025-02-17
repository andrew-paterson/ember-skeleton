import { inject } from '@ember/service';
import Component from '@glimmer/component';
import './ember-skeleton.css';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  data-test-id=\"ember-skeleton-panel-layouts\"\n  data-test-ember-skeleton-panel-layout\n  class=\"wrapper panel-layout esk-container\n    {{if this.emberSkeleton.hideContent \'hide-content\' \'show-content\'}}\"\n  ...attributes\n>\n  <this.emberSkeleton.options.headerComponent @headerProps={{@headerProps}} />\n  <section class=\"panel-container\">\n    <EmberSkeleton::MainContent>\n      {{yield}}\n    </EmberSkeleton::MainContent>\n    <this.emberSkeleton.options.footerComponent @footerProps={{@footerProps}} />\n  </section>\n</div>");

class OuterWrapper extends Component {
  static {
    g(this.prototype, "emberSkeleton", [inject]);
  }
  #emberSkeleton = (i(this, "emberSkeleton"), undefined);
}
setComponentTemplate(TEMPLATE, OuterWrapper);

export { OuterWrapper as default };
//# sourceMappingURL=outer-wrapper.js.map
