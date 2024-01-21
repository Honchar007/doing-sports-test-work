/* eslint-disable */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useNavigate } from "react-router-dom";
import StyledHeader from "./StyledHeader";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("StyledHeader component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders StyledHeader component correctly", () => {
    const { container } = render(<StyledHeader />);

    const headerWrapper = container.getElementsByClassName("header-wrapper");
    expect(headerWrapper[0]).toBeInTheDocument();

    const backButton = container.getElementsByClassName("back-wrapper")[0];
    expect(backButton).toBeInTheDocument();
    expect(backButton.tagName).toBe("DIV");

    const mainLink = container.getElementsByClassName("header-title")[0];
    expect(mainLink).toBeInTheDocument();

    const iconImage = screen.getByAltText("icon");
    expect(iconImage).toBeInTheDocument();
    expect(iconImage.tagName).toBe("IMG");
  });

  it("navigates back when the back button is clicked", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);

    const { container } = render(<StyledHeader />);

    const backButton = container.getElementsByClassName("back-wrapper")[0];
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
