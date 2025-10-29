import { EMAIL_REGEX } from "./constants";

function ValidateField(fieldName: string, fieldValue: string) {
  switch (fieldName) {
    case "firstName":
      if (fieldValue.trim().length === 0) {
        return "First name is required!";
      }
      return "";
    case "lastName":
      if (fieldValue.trim().length === 0) {
        return "Last name is required!";
      }
      return "";
    case "email":
      if (fieldValue.trim().length === 0) {
        return "Email is required!";
      } else if (!EMAIL_REGEX.test(fieldValue.trim())) {
        return "Invalid email!";
      }
      return "";
    case "password":
      if (fieldValue.trim().length < 8) {
        return "Password must contain at least 8 characters!";
      }
      return "";
    default:
      return "";
  }
}

export default ValidateField;
