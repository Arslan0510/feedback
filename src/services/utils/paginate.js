import _ from "lodash";

export function paginate(projects, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(projects).slice(startIndex).take(pageSize).value();
}
