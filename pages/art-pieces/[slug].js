import ArtPieceDetails from "@/components/ArtPieceDetails";
import { isArtPieceFavorite } from "@/lib/utils";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ArtPiecePage({
  artPiecesInfo,
  onSubmitComment,
  handleToggleFavorite,
  comments,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = artPiecesInfo.find(
    (artPiece) => artPiece.slug === slug
  );

  const isFavorite = isArtPieceFavorite(slug, artPiecesInfo);
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <ArtPieceDetails
        artPiece={currentArtPiece}
        isFavorite={isFavorite}
        handleToggleFavorite={() => handleToggleFavorite(slug)}
        onSubmitComment={onSubmitComment}
        comments={comments}
      />
    </>
  );
}
