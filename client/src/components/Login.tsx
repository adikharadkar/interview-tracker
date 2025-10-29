import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
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
