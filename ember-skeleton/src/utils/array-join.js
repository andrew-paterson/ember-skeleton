export default function arrayJoin(array, joinString, options) {
  if (!array) {
    return;
  }
  if (!Array.isArray(array)) {
    console.warn(
      `[ember-skeleton/array-join] You must pass an array as the first argument, You passed ${params[0]}] `
    );
    return array;
  }
  if (options.finalJoinString) {
    var firstPart = array.slice(0, -1).join(joinString);
    return `${firstPart}${options.finalJoinString}${array[array.length - 1]}`;
  }
  return array.join(joinString);
}
