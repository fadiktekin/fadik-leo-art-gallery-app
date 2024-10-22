import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  if (error) {
    console.log(error);
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    console.log(isLoading);
    return <div>Loading...</div>;
  }

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((prevArtPiecesInfo) => {
      const toggledArtPiece = prevArtPiecesInfo.find(
        (info) => info.slug === slug
      );

      // If toggled art piece already exists in the state,
      // update isFavorite value in the state for that art piece
      if (toggledArtPiece) {
        return prevArtPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      } else {
        // if toggled art piece is not in the state, create the initial state with correct
        // isFavorite value
        return data.map((artPiece) => {
          return { ...artPiece, isFavorite: artPiece.slug === slug };
        });
      }
    });
  }

  console.log("artPiecesInfo", artPiecesInfo);

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
