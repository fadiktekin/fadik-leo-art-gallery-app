import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test("Renders Pieces list", () => {
  const pieces = null;
  render(<ArtPieces pieces={pieces} />);
  const card = screen.getByText("No art pieces available");
  expect(card).toBeInTheDocument();
});
