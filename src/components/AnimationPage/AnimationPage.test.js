/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import AnimationPage from "./AnimationPage";

describe("AnimationPage Component Tests", () => {
  it("renders AnimationPage component with children", () => {
    render(
      <AnimationPage>
        <div>Test Child</div>
      </AnimationPage>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
