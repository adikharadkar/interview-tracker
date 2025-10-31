export default function GetStatusStyles(status: String) {
  switch (status) {
    case "Offer":
      return {
        color: "green",
        backgroundColor: "#D5FDD5",
      };
    case "Interviewing":
      return {
        color: "orange",
        backgroundColor: "#FFF0D5",
      };
    case "Rejected":
      return {
        color: "red",
        backgroundColor: "#FFDDDD",
      };
    case "Applied":
      return {
        color: "blue",
        backgroundColor: "#E4E4FF",
      };
    default:
      return {};
  }
}
