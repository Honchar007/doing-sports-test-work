import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StyledButton from "./StyledButton";

describe("StyledButton component", () => {
  it("renders StyledButton component correctly", () => {
    render(<StyledButton>Click me</StyledButton>);

    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("BUTTON");
    expect(buttonElement).toHaveClass("btn");
  });

  it("applies disabled style when disabled prop is true", () => {
    render(<StyledButton disabled>Disabled Button</StyledButton>);

    const disabledButton = screen.getByText("Disabled Button");
    expect(disabledButton).toHaveClass("btn");
    expect(disabledButton).toHaveClass("disabled");
    expect(disabledButton).toBeDisabled();
  });

  it("does not apply disabled style when disabled prop is false", () => {
    render(<StyledButton disabled={false}>Enabled Button</StyledButton>);

    const enabledButton = screen.getByText("Enabled Button");
    expect(enabledButton).toHaveClass("btn");
    expect(enabledButton).not.toHaveClass("disabled");
    expect(enabledButton).not.toBeDisabled();
  });
});
