function cloneDeep(obj) {
  if (typeof obj !== "object") return obj;

  let ret = Array.isArray(obj) ? [] : {};
  for (let key of Object.keys(obj)) {
    ret[key] = typeof obj[key] === "object" ? cloneDeep(obj[key]) : obj[key];
  }
  return ret;
}
