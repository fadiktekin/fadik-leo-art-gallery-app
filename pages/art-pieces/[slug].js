import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPiecePage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = pieces.find((artPiece) => artPiece.slug === slug);
  const { imageSource, name, artist, genre, colors, dimensions } =
    currentArtPiece;
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
      />
    </>
  );
}
