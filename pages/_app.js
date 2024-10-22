import GlobalStyle from "../styles";
import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) {
    console.log(error);
    return <div>Failed to load</div>;
  }
  if (isLoading) {
    console.log(isLoading);
    return <div>Loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navigation />
      <ArtPieces pieces={data} />
    </>
  );
}
