import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

import PlayerCard from "../components/PlayerCard2";

let tools;

jest.mock("axios", () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [{ name: "Esther", country: "Nigeria", searches: 3 }]
      });
    }
  };
});

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<PlayerCard />);
});

describe("PlayerCard component", () => {
  it("shows the correct players", () => {
    const player = tools.getByTestId("player");
    expect(player).toBeInTheDocument();
  });
});
