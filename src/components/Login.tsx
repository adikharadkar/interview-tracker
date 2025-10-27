import { useState } from "react";

interface FormProps {
  email: string;
  password: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const [formData, setFormData] = useState<FormProps>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormProps>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors: FormProps = {
      email: "",
      password: "",
    };
    let isValid = true;

    if (formData.email.trim().length === 0) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Invalid email!";
      isValid = false;
    }

    if (formData.password.trim().length < 8) {
      newErrors.password = "Password must contain at least 8 characters!";
      isValid = false;
    }

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
