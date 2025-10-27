import { useState } from "react";

interface formDataProps {
  email: string;
  password: string;
  confirmPassword: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Signup = () => {
  const [formData, setFormData] = useState<formDataProps>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<formDataProps>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (formData.email.trim().length === 0) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = "Invalid email!";
      isValid = false;
    }

    if (formData.password.trim().length < 8) {
      newErrors.password = "Password must contain at least 8 characters!";
      isValid = false;
    }

    if (formData.confirmPassword.trim().length < 8) {
      newErrors.confirmPassword =
        "Password must contain at least 8 characters!";
      isValid = false;
    } else if (formData.confirmPassword.trim() !== formData.password.trim()) {
      newErrors.confirmPassword = "Passwords do not match!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      setFormData({ email: "", password: "", confirmPassword: "" });
    }
  };
  return (
    <div>
      <h2>Create Account</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            id="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <span>{errors.password}</span>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-enter password"
            onChange={handleInputChange}
            value={formData.confirmPassword}
          />
          <span>{errors.confirmPassword}</span>
        </div>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
