import {routes} from "../../../services";

export const sidebar = [
  {id: 1, to: routes.dashboard, name: "Dashboard", icon: "fa-home"},
  {id: 2, to: routes.projects, name: "Projects", icon: "fa-file"},
  {id: 3, to: routes.feedback, name: "Add Feedback", icon: "fa-plus-square"},
  {
    id: 4,
    to: routes.addDeveloper,
    name: "Add Developer",
    icon: "fa-plus-square",
  },
  {
    id: 5,
    to: routes.cFeedback,
    name: "Completed Feedback",
    icon: "fa-list-alt",
  },
  {id: 6, to: routes.developers, name: "Developers", icon: "fa-users"},
  {id: 7, to: routes.techStack, name: "Tech stacks", icon: "fa-linux"},
];
