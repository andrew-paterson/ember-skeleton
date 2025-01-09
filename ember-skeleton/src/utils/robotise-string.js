export default function robotiseString(string, separator = '_') {
  if (!string) {
    return;
  }
  if (typeof string !== 'string') {
    console.warn(
      `[Ember Skeleton] The humanise string function must receive a string as it's first argument. You passed an ${typeof string}.`
    );
    return;
  }
  string = string.replace(/ /g, separator);
  return string.toLowerCase();
}
