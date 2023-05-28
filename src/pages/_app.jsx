import Head from "next/head";
import Bottom from "package/components/layout/bottom";
import Copyright from "package/components/layout/copyright";
import Navigation from "package/components/navigation";
import "package/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gnzcode</title>
        <meta name="description" content="Desarrollador web full stack" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Bottom />
      <Copyright />
    </>
  );
}
