import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, test, describe, afterEach } from "vitest";
import Tile from "./Tile";
import { FiBookmark } from "react-icons/fi";

afterEach(() => {
  cleanup();
});

describe("Tile Component", () => {
  test("Should render tile component", () => {
    render(
      <BrowserRouter>
        <Tile
          tileName="All Applications"
          applicationCount={25}
          icon={<FiBookmark />}
          iconBg="#eff6ff"
        />
      </BrowserRouter>
    );

    const tileName = screen.getByTestId("tileName");
    const tileCount = screen.getByTestId("tileCount");
    const tileIcon = screen.getByTestId("tileIcon");

    expect(tileName).toHaveTextContent("All Applications");
    expect(tileCount).toHaveTextContent("25");
    expect(tileIcon).toBeInTheDocument();
  });
});
