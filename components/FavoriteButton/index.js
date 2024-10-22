import styles from "./favoritebutton.module.css";
export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      type="button"
      className={isFavorite ? styles.marked : styles.favorite}
      onClick={onToggleFavorite}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorite"}
    </button>
  );
}
