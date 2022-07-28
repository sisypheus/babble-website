import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Babble from "../components/Babble";
import Features from "../components/Features";
import Header from "../components/Header";
import Pricing from "../components/Pricing/Pricing";
import Widget from "../components/Widget";

function Home({ links }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Babble | Hassle-free customer chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen bg-gray-900">
        <Header links={links} />
        <Widget />

        <Babble />

        <div className="h-32 bg-slate-50" />

        <Features />

        <div className="h-32 bg-slate-50" />

        <Pricing/>

      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      links: [
        { link: "#why-babble", label: "Why Babble" },
        { link: "#pricing", label: "Pricing" },
        { link: "#features", label: "Features" },
        { link: "https://github.com/babble/", label: "Github" },
      ],
    },
  };
};

export default Home;
