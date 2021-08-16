function cloneDeep(object) {
  if (typeof object !== "object") return object;
  const ret = Array.isArray(object) ? [] : {};

  for (let key of Object.keys(object)) {
    ret[key] =
      typeof object[key] === "object" ? cloneDeep(object[key]) : object[key];
  }
  return ret;
}