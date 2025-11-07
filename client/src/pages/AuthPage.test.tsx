import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { expect, describe, test, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

import AuthPage from "./AuthPage";

afterEach(() => {
  cleanup();
});

describe("Auth Page", () => {
  test("should render Auth page", () => {
    render(
      <BrowserRouter>
        <AuthPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Log In To Your Account")).toBeInTheDocument();
  });

  test("should render sign up form after clicking the sign up link", () => {
    render(
      <BrowserRouter>
        <AuthPage />
      </BrowserRouter>
    );

    const link = screen.getByTestId("linkToSignupOrLogin");

    expect(link).toHaveTextContent("Sign Up");
    fireEvent.click(link);
    expect(screen.getByText("Create Account")).toBeInTheDocument();
    expect(link).toHaveTextContent("Log In");
  });
});
