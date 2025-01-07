export default function groupNonModelDataBy(collection, property) {
  let groups = [];
  let items = collection;
  if (items) {
    items.forEach(function (item) {
      let value = item[property];
      let group = groups.findBy('value', value);
      if (group) {
        group.items.push(item);
      } else {
        group = { property: property, value: value, items: [item] };
        groups.push(group);
      }
    });
  }
  return groups;
}
