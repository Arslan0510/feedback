export const removeEmptyStrings = (obj) => {
  const _obj = {...obj};
  Object.keys(_obj).forEach((key) => {
    if (_obj[key]) return;
    _obj[key] = undefined;
  });
  return _obj;
};

export const removeEmptyValues = (obj) =>
  obj.filter((el) => {
    return el != null && el !== "undefined";
  });

export const findGivenValues = (arr, valueName) => {
  var obj = [];
  arr &&
    arr.forEach((el) =>
      el.techStack.forEach((ele) => {
        if (ele.name === valueName) obj.push(el.developerName);
      })
    );
  return obj;
};
