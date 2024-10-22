import { StyledContainer } from "./ArtPieces.styled";
import ArtPiecePreview from "../ArtPiecePreview";
import { isArtPieceFavorite } from "@/lib/utils";

export default function ArtPieces({ artPiecesInfo, handleToggleFavorite }) {
  return (
    <StyledContainer>
      {!!artPiecesInfo ? (
        artPiecesInfo.map(({ slug, name, artist, imageSource }) => {
          const isFavorite = isArtPieceFavorite(slug, artPiecesInfo);
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
