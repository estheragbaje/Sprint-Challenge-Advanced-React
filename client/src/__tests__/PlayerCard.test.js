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

const localStorageItem = {
  darkMode: false
};

const localStorageMock = {
  getItem: jest.fn().mockImplementation(key => localStorageItem[key]),
  setItem: jest.fn().mockImplementation((key, value) => {
    localStorageItem[key] = value;
  }),
  clear: jest.fn().mockImplementation(key => {
    localStorageItem[key] = undefined;
  })
};

// window.localStorage = localStorageMock;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<PlayerCard />);
});

describe("PlayerCard component", () => {
  it("shows the correct players", () => {
    const player = tools.getByTestId("player");
    expect(player).toBeInTheDocument();
  });

  //   it("it toggles dark mode", () => {
  //     const darkMode = localStorage.getItem("darkMode");
  //     console.log(darkMode);
  //   });
});
