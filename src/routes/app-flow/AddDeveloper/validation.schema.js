import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  developerName: Yup.string().min(3).max(50).required("Required").label("Name"),
  developerEmail: Yup.string().email().required("Required").label("Email"),
});
