import Image from "next/image";
import Link from "next/link";
import {
  StyledCard,
  StyledTitle,
  StyledPieceTitle,
  StyledArtistName,
} from "./ArtPiecePreview.styled";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <StyledCard>
      <Image src={image} alt={title} width={360} height={300}></Image>
      <StyledTitle>
        <Link href={`/art-pieces/${slug}`}>
          <StyledPieceTitle>{title}</StyledPieceTitle>
        </Link>
        <StyledArtistName>{artist}</StyledArtistName>
      </StyledTitle>
    </StyledCard>
  );
}
