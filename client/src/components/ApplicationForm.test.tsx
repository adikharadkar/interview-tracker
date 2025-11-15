import { screen, render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import ApplicationForm from "./ApplicationForm";

afterEach(() => {
  cleanup();
});

describe("Application Form Component", () => {
  test("Should render application form", () => {
    const onOpen = vi.fn();
    render(
      <BrowserRouter>
        <ApplicationForm onOpen={onOpen} />
      </BrowserRouter>
    );

    const companyNameInput = screen.getByPlaceholderText(
      "e.g., Google"
    ) as HTMLInputElement;
    const roleInput = screen.getByPlaceholderText(
      "e.g., Frontend Developer"
    ) as HTMLInputElement;
    const jobLinkInput = screen.getByPlaceholderText(
      "https:// ..."
    ) as HTMLInputElement;
    const statusInput = screen.getByTestId("statusInput");
    const dateAppliedInput = screen.getByPlaceholderText(
      "Pick a date"
    ) as HTMLInputElement;
    const locationInput = screen.getByPlaceholderText(
      "e.g., Pune, Maharashtra (Onsite)"
    ) as HTMLInputElement;
    const salaryRangeInput = screen.getByPlaceholderText(
      "e.g., Rs. 9.5L - Rs. 11L"
    ) as HTMLInputElement;
    const commentsInput = screen.getByPlaceholderText(
      "Add any additional notes..."
    ) as HTMLInputElement;
    const submitApplicationBtn = screen.getByTestId("submitApplicationBtn");

    expect(companyNameInput).toBeInTheDocument();
    expect(roleInput).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(dateAppliedInput).toBeInTheDocument();
    expect(salaryRangeInput).toBeInTheDocument();
    expect(commentsInput).toBeInTheDocument();
    expect(jobLinkInput).toBeInTheDocument();
    expect(statusInput).toBeInTheDocument();
    expect(submitApplicationBtn).toBeInTheDocument();
  });
});
