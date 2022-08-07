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
        <meta name="theme-color" content="#0f172a" />
      </Head>
      <Script
        id="babble-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function (w, d, s, o, f, js, fjs) { w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) }; js = d.createElement(s), fjs = d.getElementsByTagName(s)[0]; js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs); }(window, document, 'script', 'aw1', 'https://cdn.jsdelivr.net/gh/sisypheus/babble-widget-release@latest/widget.min.js')); aw1('init', { clientId: 'fbe42fe7-9d45-4ae8-989d-fa25386f771d', widget: { color: "#3b81f6", title: "Welcome to Babble!", subtitle: "Ask me a question, and I'll get back to you as soon as possible", minimized: true, } } );        `,
        }}
      />

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
