function customInflector(value, {
  singular,
  plural
}) {
  var pluralised = plural ? plural : `${singular}s`;
  var word = value !== 1 ? pluralised : singular;
  return word;
}

export { customInflector as default };
//# sourceMappingURL=custom-inflector.js.map
