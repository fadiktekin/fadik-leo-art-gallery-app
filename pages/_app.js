import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: fetchedData,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState(null);

  useEffect(() => {
    console.log("Fetched data", fetchedData);
    if (fetchedData) {
      const dataWithIsFavorite = fetchedData.map((artPiece) => ({
        ...artPiece,
        isFavorite: false,
      }));
      setArtPiecesInfo(dataWithIsFavorite);
    }
  }, [fetchedData]);

  if (error) {
    console.log("error", error);
    return <div>Failed to load</div>;
  }

  if (isLoading || !artPiecesInfo) {
    console.log("isLoading", isLoading);
    return <div>Loading...</div>;
  }

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((prevArtPiecesInfo) => {
      return prevArtPiecesInfo.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, isFavorite: !artPiece.isFavorite }
          : artPiece
      );
    });
  }

  console.log("artPiecesInfo", artPiecesInfo);
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
