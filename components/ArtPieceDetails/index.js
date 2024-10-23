import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import Button from "../Button";
import { useRouter } from "next/router";

import styles from "./ArtPieceDetails.module.css";

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  handleToggleFavorite,
  onSubmitComment,
  comments,
}) {
  const router = useRouter();
  const { imageSource, year, name, artist, genre, colors, dimensions } =
    artPiece;

  return (
    <div>
      <section className={styles.info}>
        <a onClick={router.back} className={styles.back}>
          Back to Gallery
        </a>
        <h1>{name}</h1>
        <h2>by {artist}</h2>
        <h3>
          {year} | {genre}
        </h3>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </section>

      <Image
        src={imageSource}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={dimensions.width}
        height={dimensions.height}
        alt="Spotlight image"
      />
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
      <h1>{artist}</h1>
      <CommentForm onSubmitComment={onSubmitComment} />
      <Comments comments={comments} />
    </div>
  );
}
