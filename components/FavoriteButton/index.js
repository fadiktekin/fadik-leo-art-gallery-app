import styles from "./favorite-button.module.css";
import Button from "../Button";
export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button
      className={isFavorite ? styles.marked : styles.favorite}
      onClick={onToggleFavorite}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorite"}
    </Button>
  );
}
