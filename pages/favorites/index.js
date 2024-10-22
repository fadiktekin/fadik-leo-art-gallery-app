import Head from "next/head";
import ArtPieces from "@/components/ArtPieces";
import styles from "./favorites.module.css";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const favoriteArtPieces = artPiecesInfo.filter(
    (info) => info.isFavorite === true
  );

  console.log("Favorite pieces:", favoriteArtPieces);

  return (
    <>
      <Head>
        <title>Favorite Art Pieces</title>
      </Head>
      <div className={styles.title__holder}>
        <h1>Favorites</h1>
      </div>
      {favoriteArtPieces.length === 0 ? (
        <p className={styles.warning}>Your Favorite List is empty.</p>
      ) : (
        <ArtPieces
          pieces={favoriteArtPieces}
          artPiecesInfo={favoriteArtPieces}
          handleToggleFavorite={handleToggleFavorite}
        />
      )}
    </>
  );
}
