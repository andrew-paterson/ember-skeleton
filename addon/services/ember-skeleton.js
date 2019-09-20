import Service from '@ember/service';

export default Service.extend({
  headerComponent: 'ember-skeleton/header',
  loadingComponent: 'ember-skeleton/loading-page',
  footerComponent: 'ember-skeleton/footer',
  mainNavItemsComponent: 'main-nav-items',
  sidebarComponent: 'ember-skeleton/sidebar-layout/sidebar',
  defaultThemeColorString: 'gray-medium'
});