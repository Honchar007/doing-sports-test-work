/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Card from "./Card";

const mockHandleChange = jest.fn();

describe("Card Component Tests", () => {
  it("renders Card component with title and image", () => {
    render(
      <Card
        title="Test Title"
        image="test-image.jpg"
        handleChange={mockHandleChange}
        selected={false}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByAltText("Test Title")).toBeInTheDocument();
  });

  it("calls handleChange function on clicking the card", () => {
    render(
      <Card
        title="Test Title"
        image="test-image.jpg"
        handleChange={mockHandleChange}
        selected={false}
      />
    );

    fireEvent.click(screen.getByText("Test Title"));
    expect(mockHandleChange).toHaveBeenCalledWith("Test Title");
  });

  it("applies 'selected' class when selected prop is true", () => {
    const { container } = render(
      <Card
        title="Test Title"
        image="test-image.jpg"
        handleChange={mockHandleChange}
        selected={true}
      />
    );

    const boxes = container.getElementsByClassName("selected");
    expect(boxes.length).toBe(1);
  });

  it("does not apply 'selected' class when selected prop is false", () => {
    const { container } = render(
      <Card
        title="Test Title"
        image="test-image.jpg"
        handleChange={mockHandleChange}
        selected={false}
      />
    );

    const boxes = container.getElementsByClassName("selected");
    expect(boxes.length).toBe(0);
  });
});
