import { helper } from '@ember/component/helper';

export function replaceString(params, hash) {
  var string = params[0];
  if (!string) {
    return;
  }
  if (typeof string !== 'string') {
    return;
  }
  var final;
  let find;
  var searchArray = [];
  if (hash.advanced) {
    searchArray = hash.advanced;
  } else if (params[1]) {
    searchArray[0] = {
      find: params[1],
      replace: params[2],
    };
  }
  searchArray.forEach((item) => {
    if (typeof item.find === 'string') {
      find = [item.find];
    } else {
      find = item.find;
    }
    if (find.indexOf(string) > -1) {
      final = item.replace;
    }
  });

  if (final === string && hash.fallback) {
    final = hash.fallback;
  }
  return final || hash.fallback || params[0];
}

export default helper(replaceString);
