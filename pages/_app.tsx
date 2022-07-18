import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Babble</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme: "light",
          colors: {
            gray: [
              "#fff",
            ]
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
