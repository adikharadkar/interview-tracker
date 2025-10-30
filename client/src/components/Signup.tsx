import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import ValidateField from "../utils/ValidateField";
import type { FormDataProps } from "../utils/constants";

const Signup = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    newErrors.firstName = ValidateField("firstName", formData?.firstName ?? "");
    newErrors.lastName = ValidateField("lastName", formData?.lastName ?? "");
    newErrors.email = ValidateField("email", formData.email);
    newErrors.password = ValidateField("password", formData.password);

    if (newErrors.email || newErrors.password) isValid = false;
    if ((formData.confirmPassword?.trim().length ?? 0) < 8) {
      newErrors.confirmPassword =
        "Password must contain at least 8 characters!";
      isValid = false;
    } else if (formData?.confirmPassword?.trim() !== formData.password.trim()) {
      newErrors.confirmPassword = "Passwords do not match!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://localhost:5000/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const { token } = await response.json();
        Cookies.set("authToken", token, {
          expires: 1 / 24,
          sameSite: "Lax",
          "http-only": true,
          secure: false,
        });
        navigate("/");
      } catch (error) {
        console.error("Error during signup:", error);
      }
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <div>
      <h2>Create Account</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            id="firstName"
            onChange={handleInputChange}
            value={formData.firstName}
          />
          <span>{errors.firstName}</span>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            id="lastName"
            onChange={handleInputChange}
            value={formData.lastName}
          />
          <span>{errors.lastName}</span>
        </div>
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
