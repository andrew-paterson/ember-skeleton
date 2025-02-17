import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#if this.emberSkeleton.alternativeContent}}\n  <div class=\"ember-skeleton-alternative-content flex-expand\">\n    <this.emberSkeleton.options.alternativeContentComponent\n      @alternativeContent={{this.emberSkeleton.alternativeContent}}\n    />\n  </div>\n{{else}}\n  {{#if this.emberSkeleton.isLoading}}\n    <div class=\"flex flex-expand flex-align-center flex-justify-center\">\n      <this.emberSkeleton.options.loadingComponent />\n    </div>\n  {{/if}}\n  {{#if this.renderContent}}\n    <div\n      class=\"main-content {{if this.emberSkeleton.isLoading \'hidden\'}}\"\n      data-test-id=\"ember-skeleton-main-content\"\n    >\n      {{yield}}\n    </div>\n  {{/if}}\n{{/if}}");

class MainContent extends Component {
  static {
    g(this.prototype, "emberSkeleton", [inject]);
  }
  #emberSkeleton = (i(this, "emberSkeleton"), undefined);
  get renderContent() {
    return !this.emberSkeleton.isLoading || this.emberSkeleton.isLoading === 'css';
  }
}
setComponentTemplate(TEMPLATE, MainContent);

export { MainContent as default };
//# sourceMappingURL=main-content.js.map
