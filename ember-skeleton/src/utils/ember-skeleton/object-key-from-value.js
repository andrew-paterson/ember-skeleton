export default function objectKeyFromValue(object, value) {
  for (var key in object) {
    if (object[key] === value) {
      return parseInt(key);
    }
  }
}
