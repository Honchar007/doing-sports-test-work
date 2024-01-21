/* eslint-disable */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhysicalExercise from "./PhysicalExercise";
import { passTrainingTimes } from "../../store/fitnessSlicer";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("PhysicalExercise component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders PhysicalExercise component correctly", () => {
    const mockExercise = "1-2 times";
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockImplementation(() => mockExercise);

    render(<PhysicalExercise />);

    expect(screen.getByText("Physical exercise")).toBeInTheDocument();
    expect(
      screen.getByText("How active are you during the day?")
    ).toBeInTheDocument();
    expect(screen.getByText("Fitness 1-2 times a week")).toBeInTheDocument();
  });

  it("handles exercise selection correctly", async () => {
    const mockDispatch = jest.fn();
    jest
      .spyOn(require("react-redux"), "useDispatch")
      .mockImplementation(() => mockDispatch);

    render(<PhysicalExercise />);

    fireEvent.click(screen.getByText("Fitness 3-5 times a week"));

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(passTrainingTimes("3-5 times"));
    });
  });

  it("displays the selected exercise as active", () => {
    const mockExercise = "3-5 times";
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockImplementation(() => mockExercise);

    render(<PhysicalExercise />);

    const selectedCard = screen.getByText(
      "Fitness 3-5 times a week"
    ).parentElement;

    expect(selectedCard).toHaveClass("selected");
  });
});
