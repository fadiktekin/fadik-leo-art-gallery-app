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
  isFavorite,
  handleToggleFavorite,
}) {
  return (
    <StyledCard>
      <Image src={image} alt={title} width={360} height={300}></Image>
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
