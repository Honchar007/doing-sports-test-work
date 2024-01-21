import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store"; // Import store from store.js

import App from "./App";

describe("App Component", () => {
  test("renders App component", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Food Mentor")).toBeInTheDocument();
    expect(screen.getByText("The Goal")).toBeInTheDocument();
  });
});
