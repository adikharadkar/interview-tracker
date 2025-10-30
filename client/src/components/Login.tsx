import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import type { FormDataProps } from "../utils/constants";
import ValidateField from "../utils/ValidateField";

const Login = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormDataProps>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors: FormDataProps = {
      email: "",
      password: "",
    };
    let isValid = true;

    newErrors.email = ValidateField("email", formData.email);
    newErrors.password = ValidateField("password", formData.password);

    if (newErrors.email || newErrors.password) isValid = false;

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }

        const { token } = await response.json();
        Cookies.set("token", token, {
          expires: 1 / 24,
          sameSite: "lax",
          secure: false,
          "http-only": false,
        });
        navigate("/");
      } catch (error) {
        console.error("Error during login:", error);
      }

      setFormData({ email: "", password: "" });
    }
  };
  return (
    <div>
      <h2>Log In</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
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
            value={formData.password}
            onChange={handleInputChange}
          />
          <span>{errors.password}</span>
        </div>
        <button onClick={handleSubmit}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
