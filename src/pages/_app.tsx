import "styles/globals.scss";
import { Header } from "containers";
import { AppProvider } from "states";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Next News SSR [Muhammad Abul-Gharaniq]</title>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
