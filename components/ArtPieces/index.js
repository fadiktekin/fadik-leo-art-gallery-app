import { StyledContainer } from "./ArtPieces.styled"
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces( {pieces} ) {
  return( 
  <StyledContainer>
    {!!pieces ? (pieces.map(({ slug, name, artist, imageSource}) => (
      <ArtPiecePreview 
        key={slug}
        title={name}
        slug={slug}
        artist={artist}
        image={imageSource}
      />
    ))
  ) : (
    <p>No art pieces available</p>
  )
  }
  </StyledContainer>
  )
}
