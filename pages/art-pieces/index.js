import Head from "next/head";
import ArtPieces from "@/components/ArtPieces";

export default function GalleryPage({ artPiecesInfo, handleToggleFavorite }) {
  return (
    <>
      <Head>
        <title>Art Pieces</title>
      </Head>
      <ArtPieces
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
