/* eslint-disable */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Goal from "./Goal";
import { passGoal } from "../../store/fitnessSlicer";
import { useDispatch, useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe("Goal component", () => {
  let store;
  let component;
  let mockDispatch;

  beforeEach(() => {
    store = mockStore({
      fitness: {
        selectedGoal: null,
      },
    });

    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    useSelector.mockImplementation((selector) => selector(store.getState()));

    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Goal />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });

  it("handles goal selection and navigation", async () => {
    const card = component.getByAltText("Lose Weight");
    fireEvent.click(card);

    expect(mockDispatch).toHaveBeenCalledWith(passGoal("lose-weight"));
  });
});
