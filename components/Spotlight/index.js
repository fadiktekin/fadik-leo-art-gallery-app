import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import styles from "./Spotlight.module.css";
export function Spotlight({
  image,
  name,
  artist,
  dimensions,
  isFavorite,
  handleToggleFavorite,
}) {
  return (
    <div>
      <section className={styles.info}>
        <h1>{name}</h1>
        <h2>by {artist}</h2>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </section>
      <Image
        src={image}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={dimensions.width}
        height={dimensions.height}
        alt="Spotlight image"
      />
    </div>
  );
}
