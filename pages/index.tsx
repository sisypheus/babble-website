import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Babble from "../components/Babble";
import Header from "../components/Header";
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

        <div className="h-screen bg-slate-50">
          <Babble />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      links: [
        { link: "#features", label: "Features" },
        { link: "#pricing", label: "Pricing" },
        { link: "https://github.com/babble/", label: "Github" },
        { link: "#why-babble", label: "Why Babble" },
      ],
    },
  };
};

export default Home;
