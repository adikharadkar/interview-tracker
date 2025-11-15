import { screen, render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach } from "vitest";

import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

describe("Dashboard Page", () => {
  test("Should render Dashboard page", () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    const applicationCards = screen.getAllByTestId("applicationCard");

    expect(applicationCards.length).toEqual(4);
  });
});
