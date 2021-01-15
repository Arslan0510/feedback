export const teamLeadName = (arr) => {
  let modifiedArray = [];
  arr.forEach((element) => {
    modifiedArray.push({
      value: element._id,
      label: element.developerName,
    });
  });
  return modifiedArray;
};

export const techStackName = (arr) => {
  let modifiedArray = [];
  arr.forEach((element) => {
    modifiedArray.push({
      id: element._id,
      value: element.platform,
      label: element.name,
    });
  });
  return modifiedArray;
};

export const techStackRename = (arr) => {
  let modifiedArray = [];
  arr.forEach((element) => {
    modifiedArray.push({
      _id: element.id,
      name: element.label,
      platform: element.value,
    });
  });
  return modifiedArray;
};

export const developerNames = (arr) => {
  let modifiedArray = [];
  arr.forEach((element) => {
    modifiedArray.push({
      _id: element._id,
      value: element.developerName,
      label: element.developerName,
    });
  });
  return modifiedArray;
};
