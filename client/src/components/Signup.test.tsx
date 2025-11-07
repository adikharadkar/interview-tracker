import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { expect, test, describe, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Signup from "./Signup";

afterEach(() => {
  cleanup();
});

describe("Signup Component", () => {
  test("Should render sign up component", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const pageTitle = screen.getByTestId("pageTitle");
    const firstNameInput = screen.getByTestId(
      "firstNameInput"
    ) as HTMLInputElement;
    const lastNameInput = screen.getByTestId(
      "lastNameInput"
    ) as HTMLInputElement;
    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByTestId(
      "confirmPasswordInput"
    ) as HTMLInputElement;
    const signupButton = screen.getByTestId("signupButton");
    const firstNameLabel = screen.getByTestId("firstNameLabel");
    const lastNameLabel = screen.getByTestId("lastNameLabel");
    const emailLabel = screen.getByTestId("emailLabel");
    const passwordLabel = screen.getByTestId("passwordLabel");
    const confirmPasswordLabel = screen.getByTestId("confirmPasswordLabel");

    expect(pageTitle).toBeInTheDocument();
    expect(firstNameLabel).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(confirmPasswordLabel).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });

  test("Input fields should be empty initially", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const firstNameInput = screen.getByTestId(
      "firstNameInput"
    ) as HTMLInputElement;
    const lastNameInput = screen.getByTestId(
      "lastNameInput"
    ) as HTMLInputElement;
    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByTestId(
      "confirmPasswordInput"
    ) as HTMLInputElement;

    expect(firstNameInput.value).toBe("");
    expect(lastNameInput.value).toBe("");
    expect(emailInput.value.length).toEqual(0);
    expect(passwordInput.value).toBe("");
    expect(confirmPasswordInput.value).toBe("");
  });

  test("Shows validation errors when form is submitted empty", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const signupButton = screen.getByTestId("signupButton");

    fireEvent.click(signupButton);

    const firstNameError = screen.getByText("First name is required");
    const lastNameError = screen.getByText("Last name is required");
    const emailError = screen.getByText("Email is required");
    const passwordError = screen.getAllByText(
      "Password must contain at least 8 characters"
    );

    expect(firstNameError).toBeInTheDocument();
    expect(lastNameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(passwordError.length).toEqual(2);
  });

  test("Input fields should change on user inputs", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const firstNameInput = screen.getByTestId(
      "firstNameInput"
    ) as HTMLInputElement;
    const lastNameInput = screen.getByTestId(
      "lastNameInput"
    ) as HTMLInputElement;
    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByTestId(
      "confirmPasswordInput"
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "First" } });
    expect(firstNameInput.value).toBe("First");

    fireEvent.change(lastNameInput, { target: { value: "Last" } });
    expect(lastNameInput.value).toBe("Last");

    fireEvent.change(emailInput, { target: { value: "email" } });
    expect(emailInput.value).toBe("email");

    fireEvent.change(passwordInput, { target: { value: "password" } });
    expect(passwordInput.value).toBe("password");

    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });
    expect(confirmPasswordInput.value).toBe("password");
  });

  test("Should show invalid email error", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    const signupButton = screen.getByTestId("signupButton");

    fireEvent.change(emailInput, { target: { value: "email" } });
    fireEvent.click(signupButton);

    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  test("Should show validation error if passwords do not match", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByTestId(
      "confirmPasswordInput"
    ) as HTMLInputElement;
    const signupButton = screen.getByTestId("signupButton");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });
    fireEvent.click(signupButton);

    expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
  });
});
