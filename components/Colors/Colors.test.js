import { render, screen } from "@testing-library/react";
import Color from ".";

test("Renders 'No color palette available' when colors are empty", () => {
  const colors = null;
  render(<Color colors={colors} />);

  const text = screen.getByText("No color palette available");
  expect(text).toBeInTheDocument();
});

test("Renders color palette when colors exist", () => {
  const colors = ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"];
  render(<Color colors={colors} />);

  const text = screen.getByText("COLOR PALETTE");
  expect(text).toBeInTheDocument();

  colors.map((color) => {
    const colorDiv = screen.getByTestId(color);
    expect(colorDiv).toBeInTheDocument();
  });
});
