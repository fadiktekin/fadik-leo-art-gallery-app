export function isArtPieceFavorite(slug, artPiecesInfo) {
  const { isFavorite } = artPiecesInfo?.find(
    (artPiece) => artPiece.slug === slug
  ) ?? {
    isFavorite: false,
  };

  return isFavorite;
}
