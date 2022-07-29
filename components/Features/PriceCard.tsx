import { Button, Title, Text } from "@mantine/core";
import Checked from "./Checked";
import Unchecked from "./Unchecked";

type Props = {
  price: number;
  name: string;
  highlight: boolean;
  description: string;
  features: Feature[];
};

type Feature = {
  name: string;
  available?: boolean;
  limit?: number;
};

const PriceCard = ({
  price,
  name,
  highlight,
  description,
  features,
}: Props) => {
  return (
    <div className="shadow-lg rounded-lg bg-white flex flex-col items-center justify-content-center p-8 aspect-[9/16]">
      <Title order={3} className="text-center">
        Entreprise
      </Title>
      <Button className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        <a
          className="no-underline text-white"
          href="https://app.babble.fr/register"
        >
          <Text>Try for free</Text>
        </a>
      </Button>
      <Text className="text-gray-900 text-3xl font-bold">
        {price}
        <span className="text-gray-400 text-base">/ month</span>
      </Text>
      {description}
      <Text className="text-gray-700 mt-4 text-center"></Text>
      <ul className="text-sm text-gray-800  w-full mt-6 mb-6 p-0">
        {features.map((feature: Feature) => (
          <li key={feature.name} className="mb-3 p-0 flex items-center "></li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
