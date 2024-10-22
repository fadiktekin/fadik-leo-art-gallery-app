import { StyledContainer } from "./ArtPieces.styled";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <StyledContainer>
      {!!pieces ? (
        pieces.map(({ slug, name, artist, imageSource }) => {
          const favoriteItem = artPiecesInfo?.find(
            (artPiece) => artPiece.slug === slug
          );
          const isFavorite = favoriteItem?.isFavorite;

          return (
            <ArtPiecePreview
              key={slug}
              title={name}
              slug={slug}
              artist={artist}
              image={imageSource}
              isFavorite={isFavorite}
              handleToggleFavorite={handleToggleFavorite}
            />
          );
        })
      ) : (
        <p>No art pieces available</p>
      )}
    </StyledContainer>
  );
}
