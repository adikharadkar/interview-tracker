import { EMAIL_REGEX } from "./constants";

function ValidateField(fieldName: String, fieldValue: String) {
  switch (fieldName) {
    case "firstName":
      if (fieldValue.trim().length === 0) {
        return "First name is required";
      }
      return "";
    case "lastName":
      if (fieldValue.trim().length === 0) {
        return "Last name is required";
      }
      return "";
    case "email":
      if (fieldValue.trim().length === 0) {
        return "Email is required";
      } else if (!EMAIL_REGEX.test(fieldValue.trim())) {
        return "Invalid email!";
      }
      return "";
    case "password":
      if (fieldValue.trim().length < 8) {
        return "Password must contain at least 8 characters";
      }
      return "";
    case "companyName":
      if (fieldValue.trim().length === 0) {
        return "Company name is required";
      }
      return "";
    case "role":
      if (fieldValue.trim().length === 0) {
        return "Role is required";
      }
      return "";
    case "status":
      if (!fieldValue.trim()) {
        return "Please select a valid status";
      }
      return "";
    case "dateApplied":
      if (fieldValue.trim().length === 0) {
        return "Please select a date";
      }
      return "";
    default:
      return "";
  }
}

export default ValidateField;
