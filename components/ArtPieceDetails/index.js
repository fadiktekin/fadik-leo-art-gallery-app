import Image from "next/image";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  genre,
  colors,
  dimensions,
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
      <h1>{artist}</h1>
    </div>
  );
}
