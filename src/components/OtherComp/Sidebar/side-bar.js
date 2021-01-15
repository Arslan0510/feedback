import { routes } from "../../../services"

export const sidebar = [
    { to: routes.dashboard, name: "Dashboard", icon: "fa-home" },
    { to: routes.projects, name: "Projects", icon: "fa-file" },
    { to: routes.feedback, name: "Add Feedback", icon: "fa-plus-square" },
    { to: routes.cFeedback, name: "Completed Feedback", icon: "fa-list-alt" },
    { to: routes.addDeveloper, name: "Add Developer", icon: "fa-plus-square" },
    { to: routes.developers, name: "Developers", icon: "fa-users" },
    { to: routes.techStack, name: "Tech stacks", icon: "fa-linux" },
]

