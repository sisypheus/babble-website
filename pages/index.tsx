import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Header from "../components/Header";

function Home({ links }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Babble | Hassle-free customer chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header links={links} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      links: [
        { link: "https://mantine.dev", label: "Features" },
        { link: "https://mantine.dev", label: "Pricing" },
        { link: "https://mantine.dev", label: "Github" },
      ],
    },
  };
};

export default Home;
