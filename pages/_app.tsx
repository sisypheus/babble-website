import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import Script from "next/script";

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
      <Script
        id="babble-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
                  __html: `
                (function (w, d, s, o, f, js, fjs) { w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) }; js = d.createElement(s), fjs = d.getElementsByTagName(s)[0]; js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs); }(window, document, 'script', 'aw1', 'https://cdn.jsdelivr.net/gh/sisypheus/babble-widget-release@latest/widget.min.js')); aw1('init', { clientId: '332ee05c-59f1-4d0c-b26a-375c8be9ae9e', widget: { color: "#3b81f6", title: "Welcome to Babble", subtitle: "Chat with us here", minimized: true, } } );
        `,
        }} 
      />

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
