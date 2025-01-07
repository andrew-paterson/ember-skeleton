export default function oddOrEven(num) {
  if (isEven(num)) {
    return 'even';
  } else if (isOdd(num)) {
    return 'odd';
  } else {
    return;
  }
}

function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}
