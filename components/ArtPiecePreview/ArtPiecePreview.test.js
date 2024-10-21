import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

test("Renders Pieces Card", () => {
    const mockProps = {
        title: "Orange Red and Green Abstract Painting",
        slug: "orange-red-green-abstract-painting",
        artist: "Artist Name",
        image: "/path/to/image.jpg"
    };

    render(<ArtPiecePreview {...mockProps} />);
    
    const heading = screen.getByText(/Orange Red and Green Abstract Painting/i);
    
    expect(heading).toBeInTheDocument(); // Fix typo here
});