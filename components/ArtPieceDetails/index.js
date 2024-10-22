import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
export default function ArtPieceDetails({
  image,
  title,
  artist,
  genre,
  colors,
  dimensions,
  isFavorite,
  handleToggleFavorite,
}) {
  return (
    <div>
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
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
      <h1>{artist}</h1>
    </div>
  );
}
