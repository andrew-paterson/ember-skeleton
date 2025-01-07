import { computed } from '@ember/object';
import Controller from '@ember/controller';
// BEGIN-SNIPPET import-theme-color-string-util.js
import ThemeColorStringUtil from 'ember-skeleton/utils/theme-color-string';
//END-SNIPPET
export default class ThemeColorString extends Controller {
  init() {
    super.init(...arguments);
    // BEGIN-SNIPPET theme-color-string-util-fallback.js
    this.set(
      'statusClassFallback',
      ThemeColorStringUtil('missing', { fallback: 'primary' })
    );
    //END-SNIPPET
    // BEGIN-SNIPPET theme-color-string-util-no-matches.js
    this.set('statusClassNoMatches', ThemeColorStringUtil('info'));
    //END-SNIPPET
  }

  // BEGIN-SNIPPET theme-color-string-util-basic.js
  @computed('model')
  get parsedBasic() {
    return this.model.map((person) => {
      person.set(
        'statusClass',
        ThemeColorStringUtil(person.status, {
          complete: 'success',
          absent: 'warning',
          failed: 'danger',
        })
      );
      return person;
    });
  }

  //END-SNIPPET

  // BEGIN-SNIPPET theme-color-string-util-defaults.js
  @computed('model')
  get parsedDefaults() {
    return this.model.map((person) => {
      person.set('statusClassDefault', ThemeColorStringUtil(person.status));
      return person;
    });
  }

  //END-SNIPPET

  // BEGIN-SNIPPET theme-color-string-util-default-overridden.js
  @computed('model')
  get defaultOverriden() {
    return this.model.map((person) => {
      person.set(
        'statusClassDefaultOverridden',
        ThemeColorStringUtil(person.status, { absent: 'info' })
      );
      return person;
    });
  }
  //END-SNIPPET
}
