import { useRouter } from "next/router";
import Head from "next/head";

export default function SpotlightPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>Spotlight: {name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>{slug}</h1>
      </div>
    </>
  );
}
