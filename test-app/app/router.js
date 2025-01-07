import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    this.route('introduction');
    this.route('default-options');
    this.route('styles', function () {
      this.route('box-arrows');
      this.route('box-shadow-mixin');
      this.route('card-box-shadow');
      this.route('flexbox');
      this.route('introduction');
      this.route('miscellaneous');
      this.route('spacers');
      this.route('text');
      this.route('theme-color-variants');
      this.route('theme-colors');
    });
    this.route('utility-components', function () {
      this.route('material-card');
    });
    this.route('page-loading-state');
    this.route('main-page-layouts', function () {
      this.route('panel-layout');
      this.route('sidebar-layout');
    }),
      this.route('layout-components', function () {
        this.route('content-wrapper');
        this.route('header-component');
        this.route('footer-component');
        this.route('sidebar-components');
        this.route('loading-component');
        this.route('alternative-content');
      }),
      this.route('helpers', function () {
        this.route('theme-icon');
        this.route('theme-color-string');
        this.route('humanise-string');
        this.route('custom-inflector');
        this.route('replace-string');
        this.route('readable-file-size');
        this.route('robotise-string');
        this.route('array-join');
        this.route('odd-or-even');
        this.route('in-array');
      });
    this.route('utils', function () {
      this.route('theme-icon');
      this.route('theme-color-string');
      this.route('custom-inflector');
      this.route('readable-file-size');
      this.route('robotise-string');
      this.route('array-join');
      this.route('odd-or-even');
    });
  });
  this.route('not-found', { path: '/*path' });
});

export default Router;
