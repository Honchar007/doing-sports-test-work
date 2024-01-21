/* eslint-disable */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "./CardDestructive";

const mockHandleChange = jest.fn();

const sampleCardData = {
  title: "Sample Card",
  image: "sample-image.jpg",
  handleChange: mockHandleChange,
  selected: false,
};

describe("Card component", () => {
  test("renders card with default props", () => {
    const { getByText, getByAltText } = render(<Card {...sampleCardData} />);

    expect(getByText("Sample Card")).toBeInTheDocument();
    expect(getByAltText("Sample Card")).toBeInTheDocument();

    expect(getByText("Sample Card").parentElement).not.toHaveClass("selected");
  });

  test("handles click event correctly", () => {
    const { getByText } = render(<Card {...sampleCardData} />);

    fireEvent.click(getByText("Sample Card"));

    expect(mockHandleChange).toHaveBeenCalledWith("Sample Card");
  });

  test("renders card with selected class when selected prop is true", () => {
    const { getByText } = render(<Card {...sampleCardData} selected={true} />);

    expect(getByText("Sample Card").parentElement).toHaveClass("selected");
  });
});
