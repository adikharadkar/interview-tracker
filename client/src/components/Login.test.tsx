import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import { test, describe, expect, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Login from "./Login";

afterEach(() => {
  cleanup();
});

describe("Login Component", () => {
  test("renders login component", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const pageTitle = screen.getByText("Log In To Your Account");
    const emailLabel = screen.getByTestId("emailLabel");
    const emailInput = screen.getByTestId("emailInput");
    const passwordLabel = screen.getByTestId("passwordLabel");
    const passwordInput = screen.getByTestId("passwordInput");
    const loginButton = screen.getByTestId("loginButton");

    expect(pageTitle).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("email and password inputs should be initially empty", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;
    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  test("email and password inputs should change on user input", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "React" } });
    fireEvent.change(passwordInput, { target: { value: "Testing" } });

    expect(emailInput.value).toBe("React");
    expect(passwordInput.value).toBe("Testing");
  });

  test("shows validation errors when submitting empty form", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;
    const loginButton = screen.getByTestId("loginButton");

    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");

    fireEvent.click(loginButton);

    const emailError = screen.getByText("Email is required");
    const passwordError = screen.getByText(
      "Password must contain at least 8 characters"
    );

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});
