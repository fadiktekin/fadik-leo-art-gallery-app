import Head from "next/head";
import { useState, useEffect } from "react";
import { Spotlight } from "../components/Spotlight";
import { isArtPieceFavorite } from "@/lib/utils";

function getRandomImage(pieces) {
  return pieces[Math.floor(Math.random() * pieces.length)];
}

export default function SpotlightPage({ artPiecesInfo, handleToggleFavorite }) {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const img = getRandomImage(artPiecesInfo);
    setRandomImage(img);
  }, []);

  if (!randomImage) return null;

  const { imageSource, artist, dimensions, name, slug } = randomImage;
  const isFavorite = isArtPieceFavorite(slug, artPiecesInfo);

  return (
    <>
      <Head>
        <title>
          Spotlight: {artist} | {name}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Spotlight
          image={imageSource}
          artist={artist}
          name={name}
          dimensions={dimensions}
          isFavorite={isFavorite}
          handleToggleFavorite={() => handleToggleFavorite(slug)}
        />
      </div>
    </>
  );
}
