import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test("Renders Pieces list", () => {
  const pieces = null;
  render(<ArtPieces artPiecesInfo={pieces} />);
  const card = screen.getByText("No art pieces available");
  expect(card).toBeInTheDocument();
});
