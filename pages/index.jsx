import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/book01">Book One</Link>

      <style jsx>{`
        main {
          padding: 2rem;
          display: flex;
          justify-content: center;
          gap: 3rem;
        }
      `}</style>
    </>
  );
}
