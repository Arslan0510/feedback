import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  projectName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Project Name"),
  developerName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Developer Name"),
  developerEmail: Yup.string().email().label("Email"),
  clientName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Client Name"),
  clientEmail: Yup.string().required().email().label("Email"),
  teamLeadName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Team Lead Name"),
  teamLeadEmail: Yup.string().email().label("Email"),
  description: Yup.string(),
});
