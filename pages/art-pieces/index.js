import Head from "next/head";
import ArtPieces from "@/components/ArtPieces";

export default function GalleryPage({ pieces }) {
  return (
    <>
      <Head>
        <title>Art Pieces</title>
      </Head>
      <ArtPieces pieces={pieces} />
    </>
  );
}
