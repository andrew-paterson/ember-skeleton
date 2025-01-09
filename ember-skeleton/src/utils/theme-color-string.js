import emberSkeletonOptions from './ember-skeleton-options';

export default function themeColorString(string, hash = {}) {
  var defaultAssociations = emberSkeletonOptions().themeColorStringDefaults;
  if (!string) {
    return;
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
    if (hash.fallback) {
      return hash.fallback;
    } else {
      var defaultFallbackObject = defaultAssociations.find((item) => {
        return item.fallback;
      });
      if (defaultFallbackObject) {
        return defaultFallbackObject.returnString;
      }
    }
    return string;
  }
}

function findReturnString(array, string) {
  return (
    array.find((item) => {
      return item.matchStrings.indexOf(string) > -1;
    }) || {}
  ).returnString;
}
