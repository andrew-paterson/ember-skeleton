import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';
import ENV from '../../config/environment';

export function themeColorString(params, hash, defaultAssociations) {
  console.log(ENV);
  var string = params[0];
  if (!string && !hash) {
    return;
  }
  hash = hash || {};

  var defaultFallBack = (defaultAssociations || []).find((item) => {
    return item.fallback;
  });
  var fallbackColor = hash.fallback || defaultFallBack.returnString;
  if (!string) {
    return fallbackColor;
  }
  string = string.toLowerCase();
  defaultAssociations = defaultAssociations || hash.defaultAssociations || [];
  var hashAssociations = [];
  for (var key in hash) {
    var existingAssociation = hashAssociations.find((item) => {
      return item.returnString === hash[key];
    });
    if (existingAssociation) {
      existingAssociation.matchStrings.push(key);
    } else {
      hashAssociations.push({
        returnString: hash[key],
        matchStrings: [key],
      });
    }
  }
  if (findReturnString(hashAssociations, string)) {
    return findReturnString(hashAssociations, string);
  } else if (findReturnString(defaultAssociations, string)) {
    return findReturnString(defaultAssociations, string);
  } else {
    if (!fallbackColor) {
      console.warn(
        '[ember-skeleton/theme-color-string] You did not pass a fallback colour to the helper, and you do not have a fallback option set in the themeColorStringDefaults array in ember-skeleton.'
      );
    }
    return fallbackColor;
  }
}

function findReturnString(array, string) {
  return (
    array.find((item) => {
      return item.matchStrings.indexOf(string) > -1;
    }) || {}
  ).returnString;
}

export default class ThemeColorStringzzz extends Helper {
  @service
  emberSkeleton;

  compute(params, hash) {
    var defaultAssociations = this.emberSkeleton.themeColorStringDefaults;
    return themeColorString(params, hash, defaultAssociations);
  }
}
