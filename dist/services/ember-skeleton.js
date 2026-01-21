import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Service from '@ember/service';
import emberSkeletonOptions from '../utils/ember-skeleton-options.js';
import window from 'ember-window-mock';
import { getOwner } from '@ember/application';
import themeColorString from '../utils/theme-color-string.js';
import { g, i, n } from 'decorator-transforms/runtime';

class EmberSkeletonService extends Service {
  static {
    g(this.prototype, "layoutType", [tracked], function () {
      return 'main';
    });
  }
  #layoutType = (i(this, "layoutType"), undefined);
  static {
    g(this.prototype, "isLoading", [tracked]);
  }
  #isLoading = (i(this, "isLoading"), undefined);
  static {
    g(this.prototype, "sidebarCollapsed", [tracked]);
  }
  #sidebarCollapsed = (i(this, "sidebarCollapsed"), undefined);
  static {
    g(this.prototype, "navFrozen", [tracked]);
  }
  #navFrozen = (i(this, "navFrozen"), undefined);
  static {
    g(this.prototype, "alternativeContent", [tracked]);
  }
  #alternativeContent = (i(this, "alternativeContent"), undefined);
  static {
    g(this.prototype, "options", [tracked], function () {
      return emberSkeletonOptions(getOwner(this).resolveRegistration('config:environment'));
    });
  }
  #options = (i(this, "options"), undefined);
  themeColorString(string, options) {
    return themeColorString(string, options, this.options.themeColorStringDefaults);
  }
  toggleSidebarExpanded() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    if (this.sidebarCollapsed) {
      window.localStorage.setItem('emberSkeletonSidebarCollapsed', 'true');
    } else {
      window.localStorage.removeItem('emberSkeletonSidebarCollapsed');
    }
  }
  static {
    n(this.prototype, "toggleSidebarExpanded", [action]);
  }
}

export { EmberSkeletonService as default };
//# sourceMappingURL=ember-skeleton.js.map
