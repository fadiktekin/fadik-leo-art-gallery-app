import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPieces from "."

test ("Renders Pieces list", () => {
    render(<ArtPieces />);
    const card = screen.getByText((piece.name)).toBeInThedocument();
})