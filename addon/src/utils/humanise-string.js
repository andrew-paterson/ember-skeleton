export default function humaniseString(string, casing) {
  if (!string) {
    return;
  }
  if (typeof string !== 'string') {
    console.warn(
      `[Ember Skeleton] The humanise string function must receive a string as it's first argument. You passed an ${typeof string}.`
    );
    return;
  }
  casing = casing || 'sentenceCase';
  string = string.replace(/_/g, ' ');
  if (casing === 'lowerCase') {
    return string.toLowerCase();
  } else if (casing === 'titleCase') {
    return toTitleCase(string);
  } else if (casing === 'upperCase') {
    return string.toUpperCase();
  } else {
    return toSentenceCase(string);
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}
