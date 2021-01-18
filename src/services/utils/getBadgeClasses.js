export const getBadgeClasses = () => {
  let classes = "badgeStyle rounded-pill mb-1 px-2 py-1 badge-";
  var colors = ["primary", "success", "info", "danger", "warning", "dark"];
  return classes + colors[Math.floor(Math.random() * colors.length)];
};

export const getDeveloperBadge = (name) => {
  var color = "primary";
  let classes = "best-stories px-2 py-1 badge-";
  if (name === "TEAMLEAD") color = "dark";
  else if (name === "JUNIOR_DEVELOPER") color = "warning";
  else if (name === "MID_LEVEL_DEVELOPER") color = "info";
  else if (name === "SENIOR_DEVELOPER") color = "danger";
  return classes + color;
};
