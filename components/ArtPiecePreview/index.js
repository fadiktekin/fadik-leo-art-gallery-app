import Image from "next/image";
import Link from "next/link";
import {
  StyledCard,
  StyledTitle,
  StyledPieceTitle,
  StyledArtistName,
  StyledSection,
} from "./ArtPiecePreview.styled";

import FavoriteButton from "../FavoriteButton";
export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  dimensions,
  isFavorite,
  handleToggleFavorite,
}) {
  return (
    <StyledCard>
      <Image
        src={image}
        alt={title}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={dimensions.width}
        height={dimensions.height}
      ></Image>
      <StyledTitle>
        <Link href={`/art-pieces/${slug}`}>
          <StyledPieceTitle>{title}</StyledPieceTitle>
        </Link>
        <StyledSection>
          <StyledArtistName>{artist}</StyledArtistName>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={() => handleToggleFavorite(slug)}
          />
        </StyledSection>
      </StyledTitle>
    </StyledCard>
  );
}
