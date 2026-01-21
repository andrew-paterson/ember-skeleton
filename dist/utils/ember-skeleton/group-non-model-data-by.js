function groupNonModelDataBy(collection, property) {
  let groups = [];
  let items = collection;
  if (items) {
    items.forEach(function (item) {
      let value = item[property];
      let group = groups.find(group => group.value === value);
      if (group) {
        group.items.push(item);
      } else {
        group = {
          property: property,
          value: value,
          items: [item]
        };
        groups.push(group);
      }
    });
  }
  return groups;
}

export { groupNonModelDataBy as default };
//# sourceMappingURL=group-non-model-data-by.js.map
