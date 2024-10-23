import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
export default function ArtPieceDetails({
  image,
  title,
  artist,
  genre,
  colors,
  dimensions,
  isFavorite,
  handleToggleFavorite,
  onSubmitComment,
  comments,
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
      <CommentForm onSubmitComment={onSubmitComment} />
      <Comments comments={comments} />
    </div>
  );
}
