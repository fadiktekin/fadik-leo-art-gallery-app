import Head from "next/head";
import ArtPieces from "@/components/ArtPieces";

export default function GalleryPage({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <>
      <Head>
        <title>Art Pieces</title>
      </Head>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
