import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import ValidateField from "../utils/ValidateField";
import type { FormDataProps } from "../utils/constants";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

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
      newErrors.confirmPassword = "Password must contain at least 8 characters";
      isValid = false;
    } else if (formData?.confirmPassword?.trim() !== formData.password.trim()) {
      newErrors.confirmPassword = "Passwords do not match";
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
    <Box>
      <Typography variant="h5" textAlign="center" data-testid="pageTitle">
        Create Account
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <InputLabel htmlFor="firstName" data-testid="firstNameLabel">
            First Name
          </InputLabel>
          <TextField
            type="text"
            name="firstName"
            placeholder="Enter first name"
            id="firstName"
            onChange={handleInputChange}
            value={formData.firstName}
            variant="outlined"
            helperText={errors.firstName}
            error={!!errors.firstName}
            slotProps={{
              input: {
                inputProps: {
                  "data-testid": "firstNameInput",
                },
              },
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <InputLabel htmlFor="lastName" data-testid="lastNameLabel">
            Last Name
          </InputLabel>
          <TextField
            type="text"
            name="lastName"
            placeholder="Enter last name"
            id="lastName"
            onChange={handleInputChange}
            value={formData.lastName}
            helperText={errors.lastName}
            error={!!errors.lastName}
            slotProps={{
              input: {
                inputProps: {
                  "data-testid": "lastNameInput",
                },
              },
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <InputLabel htmlFor="email" data-testid="emailLabel">
            Email
          </InputLabel>
          <TextField
            type="email"
            name="email"
            placeholder="Enter email"
            id="email"
            onChange={handleInputChange}
            value={formData.email}
            error={!!errors.email}
            helperText={errors.email}
            slotProps={{
              input: {
                inputProps: {
                  "data-testid": "emailInput",
                },
              },
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <InputLabel htmlFor="password" data-testid="passwordLabel">
            Password
          </InputLabel>
          <TextField
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={handleInputChange}
            value={formData.password}
            error={!!errors.password}
            helperText={errors.password}
            slotProps={{
              input: {
                inputProps: {
                  "data-testid": "passwordInput",
                },
              },
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <InputLabel
            htmlFor="confirmPassword"
            data-testid="confirmPasswordLabel"
          >
            Confirm Password
          </InputLabel>
          <TextField
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-enter password"
            onChange={handleInputChange}
            value={formData.confirmPassword}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            slotProps={{
              input: {
                inputProps: {
                  "data-testid": "confirmPasswordInput",
                },
              },
            }}
          />
        </Box>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ fontWeight: "bold" }}
          data-testid="signupButton"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
