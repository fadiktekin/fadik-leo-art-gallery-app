import ArtPieceDetails from "@/components/ArtPieceDetails";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ArtPiecePage({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = pieces.find((artPiece) => artPiece.slug === slug);
  const { imageSource, name, artist, genre, colors, dimensions } =
    currentArtPiece;

  const favoriteItem = artPiecesInfo?.find(
    (artPiece) => artPiece.slug === slug
  );
  const isFavorite = favoriteItem?.isFavorite;

  return (
    <>
      <Head>
        <title>Art Pieces</title>
      </Head>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        genre={genre}
        colors={colors}
        dimensions={dimensions}
        isFavorite={isFavorite}
        handleToggleFavorite={() => handleToggleFavorite(slug)}
      />
    </>
  );
}
