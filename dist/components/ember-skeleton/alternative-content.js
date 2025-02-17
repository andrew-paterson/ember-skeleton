import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class=\"text-align-center body-text flex flex-direction-column flex-align-center padding-xl\"\n>\n  {{#if @alternativeContent.icon}}\n    <@alternativeContent.icon\n      class=\"fill-{{or @alternativeContent.iconFill \'gray-medium\'}}\n        margin-bottom-xl alternative-content-icon\"\n    />\n  {{/if}}\n  {{#if @alternativeContent.title}}\n    <h1 class=\"page-header\">{{@alternativeContent.title}}</h1>{{/if}}\n  {{#if @alternativeContent.message}}\n    <div class=\"body-text\">\n      {{@alternativeContent.message}}\n    </div>\n  {{/if}}\n</div>");

class EmberSkeletonAlternativeContentComponent extends Component {}
setComponentTemplate(TEMPLATE, EmberSkeletonAlternativeContentComponent);

export { EmberSkeletonAlternativeContentComponent as default };
//# sourceMappingURL=alternative-content.js.map
