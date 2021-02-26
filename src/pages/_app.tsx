import { Header } from "containers";
import { AppProvider } from "states";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Next News SSR [Muhammad Abul-Gharaniq]</title>
      </Head>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-family: "Poppins", sans-serif;
          background-color: #eee;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      <Header></Header>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
