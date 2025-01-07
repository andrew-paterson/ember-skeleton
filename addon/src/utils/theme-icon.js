import emberSkeletonOptions from './ember-skeleton-options';

export default function themeIcon(string, hash) {
  var defaultAssociations = emberSkeletonOptions().themeIconDefaults;
  if (!string) {
    console.warn(
      '[ember-skeleton/theme-icon] You must pass a string as the first argument to the helper.',
    );
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
    if ((hash || {}).fallback) {
      return hash.fallback;
    } else {
      var defaultFallbackObject = defaultAssociations.find((item) => {
        return item.fallback;
      });
      if (defaultFallbackObject) {
        return defaultFallbackObject.returnString;
      }
    }
    return;
  }
}

function findReturnString(array, string) {
  return (
    array.find((item) => {
      return item.matchStrings.indexOf(string) > -1;
    }) || {}
  ).returnString;
}
