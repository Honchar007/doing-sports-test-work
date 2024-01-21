/* eslint-disable */
import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DestructiveBehavior from "./DestructiveBehavior";
import { passDestructives } from "../../store/fitnessSlicer";
import { useDispatch, useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe("DestructiveBehavior component", () => {
  let store;
  let component;
  let mockDispatch;

  beforeEach(() => {
    store = mockStore({
      fitness: {
        destructives: [],
      },
    });

    mockDispatch = jest.fn();

    useDispatch.mockReturnValue(mockDispatch);

    useSelector.mockImplementation((selector) => selector(store.getState()));

    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <DestructiveBehavior />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });

  it("toggles selection when clicking on a card", async () => {
    const span = await component.findByText("I have a sweet tooth");
    const card = span.parentElement;
    fireEvent.click(card);

    expect(card).toHaveClass("selected");
  });

  it("handles form submission", async () => {
    const card = component.getByAltText("I don't rest enough");
    fireEvent.click(card);

    const continueButton = component.getByText("Continue");

    await act(async () => {
      fireEvent.click(continueButton);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(useDispatch).toHaveBeenCalled();

    expect(mockDispatch).toHaveBeenCalledWith(
      passDestructives(["I don't rest enough"])
    );
  });
});
