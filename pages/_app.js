import useSWR from "swr";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import CommentForm from "@/components/CommentForm";
import "../globals.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: fetchedData,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState(null);

  const [comments, setComments] = useState([]);

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

  function handleAddComment(comment) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    setComments([...comments, { date: date, comment: comment }]);
  }

  /* function handleArtPiecesComments(slug) {
  
    setArtPiecesInfo((prevArtPiecesInfo) => {
      return prevArtPiecesInfo.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, comments: [...comments] }
          : artPiece
      );
    });
  } */

  console.log("artPiecesInfo", artPiecesInfo);

  return (
    <>
      <Layout />
      <Component
        {...pageProps}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
        onSubmitComment={handleAddComment}
        comments={comments}
      />
    </>
  );
}
