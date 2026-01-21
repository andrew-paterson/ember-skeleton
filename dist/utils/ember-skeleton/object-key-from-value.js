function objectKeyFromValue(object, value) {
  for (var key in object) {
    if (object[key] === value) {
      return parseInt(key);
    }
  }
}

export { objectKeyFromValue as default };
//# sourceMappingURL=object-key-from-value.js.map
