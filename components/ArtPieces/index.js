import { StyledContainer } from "./ArtPieces.styled"
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return( 
  <StyledContainer>
    {pieces && pieces.length > 0 ? (pieces.map((piece) => (
      <ArtPiecePreview 
        key={piece.slug}
        title={piece.name}
        slug={piece.slug}
        artist={piece.artist}
        image={piece.imageSource}
      />
    ))
  ) : (
    <p>No art pieces available</p>
  )
  }
  </StyledContainer>
  )
}
