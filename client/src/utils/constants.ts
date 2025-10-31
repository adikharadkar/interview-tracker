export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface FormDataProps {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface TableDataProps {
  company: String;
  role: String;
  status: "Applied" | "Interviewing" | "Offer" | "Rejected";
  date: String;
}

export interface PieDataProps {
  id: number;
  value: number;
  label: String;
  color?: String;
}

export const applications: TableDataProps[] = [
  {
    company: "Google",
    role: "Frontend Developer",
    status: "Interviewing",
    date: "2025-10-10",
  },
  {
    company: "Amazon",
    role: "Software Engineer",
    status: "Applied",
    date: "2025-09-25",
  },
  {
    company: "Microsoft",
    role: "UI Engineer",
    status: "Offer",
    date: "2025-10-05",
  },
  {
    company: "Netflix",
    role: "React Developer",
    status: "Rejected",
    date: "2025-08-30",
  },
  {
    company: "Meta",
    role: "Frontend Developer",
    status: "Applied",
    date: "2025-09-15",
  },
  {
    company: "Adobe",
    role: "Software Engineer",
    status: "Interviewing",
    date: "2025-10-01",
  },
  {
    company: "Spotify",
    role: "Web Developer",
    status: "Offer",
    date: "2025-09-20",
  },
  {
    company: "Salesforce",
    role: "React Engineer",
    status: "Rejected",
    date: "2025-07-10",
  },
  {
    company: "Tesla",
    role: "Frontend Developer",
    status: "Interviewing",
    date: "2025-10-18",
  },
  {
    company: "Apple",
    role: "JavaScript Engineer",
    status: "Applied",
    date: "2025-10-22",
  },
];
