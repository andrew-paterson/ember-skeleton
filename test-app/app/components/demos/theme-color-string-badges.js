import { layout as templateLayout } from '@ember-decorators/component';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { themeColorString } from 'ember-skeleton/helpers/ember-skeleton/theme-color-string';

export default class ThemeColorStringBadges extends Component {
  @service
  emberSkeleton;

  init() {
    super.init(...arguments);
    this.one = themeColorString(
      ['ok'],
      null,
      this.emberSkeleton.themeColorStringDefaults
    );
    this.two = themeColorString(
      ['ok'],
      { ok: 'danger' },
      this.emberSkeleton.themeColorStringDefaults
    );
    this.three = themeColorString(
      ['missing'],
      null,
      this.emberSkeleton.themeColorStringDefaults
    );
    this.four = themeColorString(
      ['missing'],
      { missing: 'secondary' },
      this.emberSkeleton.themeColorStringDefaults
    );
    this.five = themeColorString(
      ['missing'],
      { fallback: 'info' },
      this.emberSkeleton.themeColorStringDefaults
    );
  }
}
