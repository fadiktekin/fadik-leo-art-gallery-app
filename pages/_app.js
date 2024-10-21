import GlobalStyle from "../styles";
import useSWR from "swr";
import { SWRConfig } from "swr";
import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {

  const { data, error,  isLoading } = useSWR('https://example-apis.vercel.app/api/art', fetcher)
  const pieces = data
  console.log("Pieces:", pieces)

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
        <Navigation />
        <ArtPieces pieces = { pieces } />
      </SWRConfig>
    </>
  );
}
