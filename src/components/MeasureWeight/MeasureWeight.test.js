/* eslint-disable */
import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MeasureWeight from "./MeasureWeight";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("MeasureWeight component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders MeasureWeight component correctly", () => {
    const mockMeasures = {
      height: 180,
      weight: 75,
      measurementType: "Metric",
    };
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockImplementation(() => mockMeasures);

    render(<MeasureWeight />);

    expect(screen.getByText("Measure Yourself")).toBeInTheDocument();
    expect(
      screen.getByText("What are your height and body weight?")
    ).toBeInTheDocument();
  });

  it("handles form submission correctly", async () => {
    const mockDispatch = jest.fn();
    const mockNavigate = jest.fn();
    jest
      .spyOn(require("react-redux"), "useDispatch")
      .mockImplementation(() => mockDispatch);
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockImplementation(() => mockNavigate);

    render(<MeasureWeight />);

    fireEvent.click(screen.getByText("Metric"));
    fireEvent.change(screen.getByPlaceholderText("Height(m)"), {
      target: { value: "180" },
    });
    fireEvent.change(screen.getByPlaceholderText("Weight(m)"), {
      target: { value: "75" },
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Continue"));
      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith({
          payload: { height: "180", measure: "Metric", weight: "75" },
          type: "fitness/passMeasures",
        });
        expect(mockNavigate).toHaveBeenCalledWith("/destructive-behavior");
      });
    });
  });
});
