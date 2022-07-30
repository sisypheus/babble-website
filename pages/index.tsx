import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Babble from "../components/Babble";
import Features from "../components/Features";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Widget from "../components/Widget";

export type Plan = {
  price: number;
  name: string;
  highlight: boolean;
  description: string;
  features: Feature[];
};

export type Feature = {
  name: string;
  available?: boolean;
  limit?: number;
};

function Home({
  links,
  plans,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Babble | Hassle-free customer chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header links={links} />
      <Widget />

      <Babble />

      <div className="md:h-0 h-64 bg-slate-50" />

      <Features />

      <div className="md:h-0 h-64 bg-slate-50" />

      <Pricing plans={plans} />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      links: [
        { link: "#why-babble", label: "Why Babble" },
        { link: "#features", label: "Features" },
        { link: "#pricing", label: "Pricing" },
        { link: "https://github.com/babble/", label: "Github" },
      ],
      plans: [
        {
          price: 0,
          name: "Free Plan",
          highlight: false,
          description: "To test the basic features",
          features: [
            { name: "Customizable", available: false },
            {
              name: "Messages",
              limit: 50,
            },
            {
              name: "Unique customers",
              limit: 25,
            },
            {
              name: "Admins",
              limit: 1,
            },
          ],
        },
        {
          price: 3.99,
          name: "Basic Plan",
          highlight: false,
          description: "For small teams/businesses",
          features: [
            { name: "Customizable", available: true },
            {
              name: "Messages",
              limit: 500,
            },
            {
              name: "Unique customers",
              limit: 500,
            },
            {
              name: "Admins",
              limit: 2,
            },
          ],
        },
        {
          price: 6.99,
          name: "Premium Plan",
          highlight: true,
          description: "For medium teams/businesses",
          features: [
            { name: "Customizable", available: true },
            {
              name: "Messages",
              limit: 1000,
            },
            {
              name: "Unique customers",
              limit: 500,
            },
            {
              name: "Admins",
              limit: 3,
            },
          ],
        },
        {
          price: 14.99,
          name: "Enterprise Plan",
          highlight: false,
          description: "For bigger teams/businesses",
          features: [
            { name: "Customizable", available: true },
            {
              name: "Messages",
              limit: 5000,
            },
            {
              name: "Unique customers",
              limit: 2500,
            },
            {
              name: "Admins",
              limit: 4,
            },
          ],
        },
      ],
    },
  };
};

export default Home;
