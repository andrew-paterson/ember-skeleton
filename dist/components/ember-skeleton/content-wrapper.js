import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"padding-xxl content-container\" ...attributes>\n  {{#if (has-block \"titleComponent\")}}\n    {{yield to=\"titleComponent\"}}\n  {{else}}\n    {{#if @title}}<h1 class=\"page-header\">{{@title}}</h1>{{/if}}\n  {{/if}}\n  <div class=\"content-body body-text\">\n    {{yield}}\n  </div>\n</div>");

class ContentWrapper extends Component {}
setComponentTemplate(TEMPLATE, ContentWrapper);

export { ContentWrapper as default };
//# sourceMappingURL=content-wrapper.js.map
