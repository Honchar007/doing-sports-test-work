/* eslint-disable */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledInput from "./StyledInput";

describe("StyledInput component", () => {
  test("renders StyledInput without error", () => {
    const { container } = render(<StyledInput />);

    const inputElement = container.getElementsByClassName("input-wrapper")[0];
    expect(inputElement).toBeInTheDocument();

    const errorElements = container.getElementsByClassName("error-message");
    expect(errorElements.length).toBe(0);
  });

  test("renders StyledInput with error", () => {
    const errorMessage = "This is an error message";

    const { container } = render(<StyledInput error={errorMessage} />);

    const inputElement = container.getElementsByClassName("input-wrapper")[0];
    expect(inputElement).toBeInTheDocument();

    const errorMessageElement =
      container.getElementsByClassName("error-message")[0];
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveTextContent(errorMessage);
  });
});
