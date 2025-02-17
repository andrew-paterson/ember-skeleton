import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"loading-graphics\">\n  <EmberSkeleton::LoadingGraphic />\n</div>");

class LoadingPage extends Component {}
setComponentTemplate(TEMPLATE, LoadingPage);

export { LoadingPage as default };
//# sourceMappingURL=loading-page.js.map
