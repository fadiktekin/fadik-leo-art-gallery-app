import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import Colors from "../Colors";
import { useRouter } from "next/router";

import styles from "./ArtPieceDetails.module.css";

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  handleToggleFavorite,
  onSubmitComment,
}) {
  const router = useRouter();
  const {
    imageSource,
    year,
    name,
    artist,
    genre,
    colors,
    slug,
    dimensions,
    comments,
  } = artPiece;

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

      <section className={styles.description__section}>
        <container className={styles.description__container}>
          <p className={styles.description__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem
            libero, egestas a fringilla ac, maximus nec augue. Proin condimentum
            eros quis urna luctus ultricies. Fusce lobortis feugiat aliquam.
            Vivamus sit amet enim vitae nisl ultricies molestie non sed massa.
            Nunc at lobortis sem, facilisis sollicitudin sapien. Duis et
            placerat erat. Nulla facilisi. Curabitur at interdum mi. In ac elit
            feugiat ante tincidunt volutpat vel a mi. Nulla ultricies augue
            efficitur scelerisque egestas. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Morbi tempor
            lectus nec libero efficitur fringilla. Suspendisse potenti. Morbi
            ultricies velit vitae quam suscipit, eget dignissim dui bibendum.
            Vestibulum tristique enim quis justo ultrices tincidunt. Vestibulum
            rutrum fringilla nibh a euismod.{" "}
          </p>
        </container>
        <Colors colors={colors} />
      </section>
      <section className={styles.comments__section}>
        <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
        <Comments comments={comments} />
      </section>
    </div>
  );
}
