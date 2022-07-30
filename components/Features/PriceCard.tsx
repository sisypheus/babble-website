import { Button, Title, Text, Divider } from "@mantine/core";
import { Plan, Feature } from "../../pages/index";
import Checked from "./Checked";
import Unchecked from "./Unchecked";

const PriceCard = ({ price, name, highlight, description, features }: Plan) => {
  const redirectToApp = () => {
    window.location.href = "https://app.babble.fr/register";
  };

  return highlight ? (
    <div className="shadow-lg rounded-lg bg-indigo-500 flex flex-col items-center justify-content-center p-8 aspect-[9/16]">
      <Title order={2} className="text-center text-white">
        {name}
      </Title>
      <Button
        onClick={redirectToApp}
        className="py-2 px-4 my-2 bg-indigo-50 hover:bg-indigo-700 hover:text-indigo-100 text-indigo-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        <Text className="text-inherit">Try for free</Text>
      </Button>
      {price ? (
        <Text className="text-gray-200 text-2xl font-bold text-center py-2 flex items-center">
          {price}€
          <span className="text-gray-400 text-base">&nbsp; / month</span>
        </Text>
      ) : (
        <Text className="text-gray-900 text-2xl font-bold text-center py-2 flex items-center">
          Free
        </Text>
      )}
      <Divider
        my={"sm"}
        variant="solid"
        className="w-full border-1 border-gray-200"
      />
      <Text className="text-gray-50 mt-4 text-center">{description}</Text>
      <ul className="text-sm text-gray-800  w-full mt-6 mb-6 p-0">
        {features.map((feature: Feature) => (
          <li key={feature.name} className="mb-3 p-0 flex items-center ">
            {feature.available ? (
              <Checked className="h-6 w-6 mr-7" />
            ) : feature.available === undefined ? (
              <Text className="w-16 text-white font-medium">
                {feature.limit}
              </Text>
            ) : (
              <Unchecked className="h-6 w-6 mr-7" />
            )}
            <Text className="ml-2 w-full font-medium text-white">
              {feature.name}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="shadow-lg rounded-lg bg-white flex flex-col items-center justify-content-center p-8 aspect-[9/16]">
      <Title order={2} className="text-center">
        {name}
      </Title>
      <Button
        onClick={redirectToApp}
        className="py-2 px-4 my-2 bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        <Text>Try for free</Text>
      </Button>
      {price ? (
        <Text className="text-gray-900 text-2xl font-bold text-center py-2 flex items-center">
          {price}€<span className="text-gray-400 text-base">&nbsp;/ month</span>
        </Text>
      ) : (
        <Text className="text-gray-900 text-2xl font-bold text-center py-2 flex items-center">
          Free
        </Text>
      )}
      <Divider
        my={"sm"}
        variant="solid"
        className="w-full border-1 border-gray-200"
      />
      <Text className="text-gray-700 mt-4 text-center">{description}</Text>
      <ul className="text-sm text-gray-800  w-full mt-6 mb-6 p-0">
        {features.map((feature: Feature) => (
          <li key={feature.name} className="mb-3 p-0 flex items-center ">
            {feature.available ? (
              <Checked className="h-6 w-6 mr-7" />
            ) : feature.available === undefined ? (
              <Text className="w-16">{feature.limit}</Text>
            ) : (
              <Unchecked className="h-6 w-6 mr-7" />
            )}
            <Text className="ml-2 w-full font-medium">{feature.name}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
