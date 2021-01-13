export const teamLeadName = (arr) => {
  let modifiedArray = [];
  arr.forEach((element) => {
    modifiedArray.push({
      value: element.developerName,
      label: element.developerName,
    });
  });
  return modifiedArray;
};

export const techStackName = (arr) => {
  let modifiedArray = [];
  arr.forEach((element) => {
    modifiedArray.push({
      value: element._id,
      label: element.name,
    });
  });
  return modifiedArray;
};
