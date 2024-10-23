import useSWR from "swr";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import "../globals.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: fetchedData,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    ""
  );

  useEffect(() => {
    console.log("Fetched data", fetchedData);
    if (fetchedData && !artPiecesInfo) {
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

  function handleAddComment(comment) {
    setArtPiecesInfo((prevArr) => {
      return prevArr.map((artPiece) => {
        if (artPiece.slug === comment.slug) {
          let oldcomments = [];
          if (artPiece.hasOwnProperty("comments")) {
            oldcomments = artPiece.comments;
          }
          return { ...artPiece, comments: [...oldcomments, comment] };
        }
        return artPiece;
      });
    });
  }

  console.log("artPiecesInfo", artPiecesInfo);

  return (
    <>
      <Layout />
      <Component
        {...pageProps}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
        onSubmitComment={handleAddComment}
      />
    </>
  );
}
