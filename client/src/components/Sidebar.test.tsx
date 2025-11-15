import { screen, render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach, vi } from "vitest";

import Sidebar from "./Sidebar";
import ApplicationForm from "./ApplicationForm";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

describe("Sidebar Component", () => {
  test("Should render sidebar component", () => {
    const onOpen = vi.fn();
    render(
      <BrowserRouter>
        <Sidebar isOpen={true}>
          <ApplicationForm onOpen={onOpen} />
        </Sidebar>
      </BrowserRouter>
    );

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
