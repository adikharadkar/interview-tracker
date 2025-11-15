import { screen, render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach, vi } from "vitest";

import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

describe("Navbar Component", () => {
  test("Should render navigation bar", () => {
    const onOpen = vi.fn();
    render(
      <BrowserRouter>
        <Navbar onOpen={onOpen} />
      </BrowserRouter>
    );

    expect(screen.getByText("Interview Tracker")).toBeInTheDocument();
  });
});
