export default function customSortJsonArray(params) {
  const order = params.order || [];
  const array = params.array ? params.array : [];
  const key = params.key || '';
  const orderedArray = [];
  //Include all items in the order list that is included in the passed params.
  order.forEach((orderItem) => {
    const arraySubset = array.filter((arrayItem) => {
      return orderItemMatch(orderItem, arrayItem, key);
    });
    arraySubset.forEach((arrayItem) => {
      orderedArray.push(arrayItem);
    });
  });
  const leftOvers = array.filter((arrayItem) => {
    let nomatch = true;
    order.forEach((orderItem) => {
      if (orderItemMatch(orderItem, arrayItem, key)) {
        nomatch = false;
      }
    });
    return nomatch;
  });
  return orderedArray.concat(leftOvers);
}

function orderItemMatch(orderItem, arrayItem, key) {
  if (orderItem instanceof RegExp) {
    return orderItem.test(arrayItem[key]);
  } else {
    return arrayItem[key] === orderItem;
  }
}
