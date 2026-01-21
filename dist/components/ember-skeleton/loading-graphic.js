import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"loader\" ...attributes>\n  <svg class=\"circular one\" viewBox=\"25 25 50 50\">\n    <circle\n      class=\"path\"\n      cx=\"50\"\n      cy=\"50\"\n      r=\"20\"\n      fill=\"none\"\n      stroke-width=\"1.3\"\n      stroke-miterlimit=\"10\"\n    />\n  </svg>\n  <svg class=\"circular two\" viewBox=\"25 25 50 50\">\n    <circle\n      class=\"path\"\n      cx=\"50\"\n      cy=\"50\"\n      r=\"20\"\n      fill=\"none\"\n      stroke-width=\"1\"\n      stroke-miterlimit=\"10\"\n    />\n  </svg>\n</div>");

class LoadingGraphic extends Component {}
setComponentTemplate(TEMPLATE, LoadingGraphic);

export { LoadingGraphic as default };
//# sourceMappingURL=loading-graphic.js.map
